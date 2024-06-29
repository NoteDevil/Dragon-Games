import React, { useState } from "react";
import {
  Button,
  getKeyValue,
  Input,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import Index from "./index";
import useAxios from "axios-hooks";

const ServerList: React.FC = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:3000/api/adminpanel/server"
  );

  const columns = [
    { key: "name", label: "Name" },
    { key: "map", label: "Map" },
    { key: "connect", label: "Connect" },
    { key: "numplayers", label: "Players" },
    { key: "maxplayers", label: "Max Players" },
  ];

  if (loading) {
    return <Index IsLoading={true}> </Index>;
  }

  if (data === undefined) {
    return <Index IsLoading={true}> </Index>;
  }

  return (
    <Index IsLoading={false}>
      <div>
        <h2 className="text-center mb-28">Сервера</h2>
        <div>
          <p className="text-right text-[#31344d] pb-1">
            Обновлено: {new Date(data.servers.DateUpdate).toLocaleString()}
          </p>
          <Table aria-label="Server list">
            <TableHeader columns={columns}>
              {({ key: columnKey, label }) => (
                <TableColumn key={columnKey}>{label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={data.servers.servers}>
              {(server) => (
                // @ts-ignore
                <TableRow key={server.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(server, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Index>
  );
};

export default ServerList;
