import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/db";
import { Redis } from "ioredis";
import { QueryResult } from "gamedig";
/**
 * API handler for the admin panel server endpoints.
 *
 * @param {NextApiRequest} req - the request object from the Next.js API route
 * @param {NextApiResponse} res - the response object from the Next.js API route
 * @return {Promise<void>} - void promise
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const getServers = async (): Promise<{
    count: number;
    servers: QueryResult[];
  }> => {
    const redis = new Redis();
    const lastDataTimestamp = await redis.get("date_last_update");
    const data = await redis.get(lastDataTimestamp as string);
    const count = await redis.get("servers_count");

    if (lastDataTimestamp === null || data === null || count === null) {
      // @ts-ignore
      return res
        .status(404)
        .json({ message: "Data not found", success: false });
    }

    return {
      count: Number(count),
      servers: JSON.parse(data),
    };
  };
  /**
   * Asynchronous function to create a server.
   *
   * @param {Object} req - the request object from the Next.js API route
   * @param {string} req.body.IP - the IP address of the server
   * @param {number} req.body.Port - the port number of the server
   * @param {string} req.body.Platform - the platform of the server
   * @return {Object} an object containing a message indicating the success or an error message
   */
  async function createServer(req: any) {
    const { IP, Port, Platform } = req.body;
    try {
      await prisma.server.create({
        data: {
          IP,
          Port,
          Platform,
        },
      });
      return {
        message: "Server was successfully created.",
        success: true,
      };
    } catch (error) {
      return {
        message: error,
        success: false,
      };
    }
  }

  switch (req.method) {
    case "GET":
      try {
        // Get all servers from the database and query their state
        return res.status(200).json(await getServers());
      } catch (error: any) {
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    case "POST":
      try {
        // Create a new server
        await createServer(req);
        return res.status(200).json({
          message: `Server created: ${req.body.IP}:${req.body.Port}`,
        });
      } catch (error: any) {
        return res.json({
          message: new Error(error).message,
        });
      }
    case "DELETE":
      try {
        // Delete a server
        await prisma.server.delete({
          where: {
            id: req.body.id,
          },
        });
        return res.status(200).json({
          message: `Server deleted: ${req.body.IP}:${req.body.Port}`,
        });
      } catch (error: any) {
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
  }
}

export default handler;
