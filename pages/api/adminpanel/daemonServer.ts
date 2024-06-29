import { PrismaClient } from "@prisma/client";
import { Redis } from "ioredis";
import { GameDig } from "gamedig";
import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const redis = new Redis();

/**
 * Asynchronous function to query the state of a server using the GameDig library.
 *
 * @param {Object} server - An object containing the server's IP, port, and platform.
 * @param {number} server.id - The server's ID.
 * @param {string} server.IP - The server's IP address.
 * @param {number} server.Port - The server's port number.
 * @param {string} server.Platform - The server's platform.
 * @return {Promise<Object>} An object containing the server's state and ID. If the server is offline, returns an object with default values.
 * @throws {Error} If the query fails.
 */
const getServerData = async (server: {
  id: number;
  IP: string;
  Port: number;
  Platform: string;
}) => {
  try {
    // Query the server's state using GameDig
    const state = await GameDig.query({
      type: server.Platform,
      host: server.IP,
      port: server.Port,
    });
    // Return the server's state along with its ID
    return { ...state, key: server.id.toString() };
  } catch {
    // If the query fails, return default values with the server's ID
    return {
      connect: `${server.IP}:${server.Port}`,
      key: server.id.toString(),
      name: "Offline", // Default name for an offline server
      map: "Offline", // Default map for an offline server
      numplayers: 0, // Default number of players for an offline server
      maxplayers: 0, // Default maximum number of players for an offline server
    };
  }
};

/**
 * Asynchronously collects server data and stores it in Redis.
 * Collects server data from the database and queries the state of each server.
 * Stores the server data in Redis with the current date and time as the key.
 *
 * @return {Promise<void>} A promise that resolves when the server data has been stored in Redis.
 */
const collectServerData = async (): Promise<void> => {
  try {
    // Get server data from the database
    const servers = await prisma.server.findMany({
      select: {
        id: true, // Server ID
        IP: true, // Server IP address
        Port: true, // Server port number
        Platform: true, // Server platform
      },
    });

    // Create an object containing the server data and the current date
    const data = {
      servers: await Promise.all(servers.map(getServerData)),
      DateUpdate: Date.now(),
    };

    // Store the server data in Redis with the current date and time as the key
    await redis.set(data.DateUpdate.toString(), JSON.stringify(data));

    // Store the number of servers in Redis with the key "servers_count"
    await redis.set("servers_count", servers.length.toString());

    // Store the first server data in the server cache
    if (!(await redis.get("date_last_update"))) {
      await redis.set("date_last_update", data.DateUpdate.toString());
    } else {
      await redis.set("date_last_update", data.DateUpdate.toString());
    }
  } catch (error) {
    console.error("Error collecting and storing server data:", error);
    throw error;
  }
};

/**
 * This function runs the 'collectServerData' function every minute using setInterval.
 * The function 'collectServerData' collects server data from the database and queries
 * the state of each server. It then stores the server data in Redis with the current
 * date and time as the key. It also stores the number of servers in Redis with the key
 * "servers_count".
 *
 * @return {void} This function does not return anything.
 * @throws {Error} If 'prisma' is not defined or if there is an error in 'collectServerData'.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!prisma) {
    throw new Error("Prisma client is not defined");
  }

  try {
    // Run the 'collectServerData' function every minute
    setInterval(collectServerData, 60000);
    console.log("Daemon server started");
    res.status(200).json({ message: "Daemon server started" });
  } catch (error) {
    console.error("Error in daemon server:", error);
    res.status(500).json({ message: "Error in daemon server" });
  }
}
