import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLoggedIn } from "../../hooks/useLoggedIn";
import axios from "axios";
import {
  Button,
  Card,
  Divider,
  Input,
  Table,
  Tag,
  Typography,
} from "@nextui-org/react";
import Layout from "../../components/layout";

interface IUser {
  id: string;
  username: string;
  rank: number;
}

interface IRang {
  id: string;
  name: string;
  min: number;
  max: number;
}

const Rang: NextPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [rang, setRang] = useState<IRang[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [selectedRang, setSelectedRang] = useState<IRang>();
  const [newRangName, setNewRangName] = useState<string>("");
  const [newRangMin, setNewRangMin] = useState<string>("");
  const [newRangMax, setNewRangMax] = useState<string>("");
  const [saveRang, { isLoading: isLoadingSaveRang }] = useMutation(
    async (data: IRang) => {
      const res = await axios.post<IRang>(`/api/adminpanel/rang/save`, data);
      return res.data;
    },
    {
      onSuccess: (data) => {
        setRang((rang) => [...rang, data]);
      },
    }
  );

  const { data: userData, isLoading: isLoadingUser } = useQuery<IUser[]>(
    "users",
    async () => {
      const res = await axios.get<IUser[]>("/api/adminpanel/users");
      return res.data;
    },
    {
      onSuccess: (data) => {
        setUsers(data);
      },
    }
  );

  const { data: rangData, isLoading: isLoadingRang } = useQuery<IRang[]>(
    "rang",
    async () => {
      const res = await axios.get<IRang[]>("/api/adminpanel/rang");
      return res.data;
    },
    {
      onSuccess: (data) => {
        setRang(data);
      },
    }
  );

  const { isLoggedIn } = useLoggedIn();
  const router = useRouter();

  if (!isLoggedIn) {
    router.push("/login");
  }

  useEffect(() => {
    if (rangData) {
      setRang(rangData);
    }
  }, [rangData]);

  useEffect(() => {
    if (userData) {
      setUsers(userData);
    }
  }, [userData]);

  const handleNewRangSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: newRangName,
      min: Number(newRangMin),
      max: Number(newRangMax),
    };
    await saveRang(data);
    setNewRangName("");
    setNewRangMin("");
    setNewRangMax("");
  };

  const handleChangeRang = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = selectedUser?.id;
    const rankId = e.target.value;
    const data = {
      userId,
      rankId,
    };
    await axios.post("/api/adminpanel/rang/change", data);
    setSelectedUser(users.find((user) => user.id === userId));
  };

  return (
    <Layout>
      <Typography.Title level={3}>Rang System</Typography.Title>
      <Divider />
      <Card css={{ width: "100%", mb: "$10" }}>
        <Card.Body>
          <Typography.Title level={5}>Add new Rang</Typography.Title>
          <form onSubmit={handleNewRangSubmit}>
            <Input
              placeholder="Name"
              value={newRangName}
              onChange={(e) => setNewRangName(e.target.value)}
            />
            <Input
              placeholder="Min"
              type="number"
              value={newRangMin}
              onChange={(e) => setNewRangMin(e.target.value)}
            />
            <Input
              placeholder="Max"
              type="number"
              value={newRangMax}
              onChange={(e) => setNewRangMax(e.target.value)}
            />
            <Button type="submit" disabled={isLoadingSaveRang}>
              Add
            </Button>
          </form>
        </Card.Body>
      </Card>
      <Card css={{ width: "100%" }}>
        <Card.Body>
          <Typography.Title level={5}>Rang</Typography.Title>
          <Table css={{ width: "100%" }}>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Min</Table.Cell>
                <Table.Cell>Max</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {rang.map((r) => (
                <Table.Row key={r.id}>
                  <Table.Cell>{r.name}</Table.Cell>
                  <Table.Cell>{r.min}</Table.Cell>
                  <Table.Cell>{r.max}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
      <Card css={{ width: "100%", mt: "$10" }}>
        <Card.Body>
          <Typography.Title level={5}>Users</Typography.Title>
          {isLoadingUser || isLoadingRang ? (
            <div className="flex justify-center">
              <Spinner color="primary" />
            </div>
          ) : (
            <Table css={{ width: "100%" }}>
              <Table.Head>
                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Rang</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {users.map((user) => (
                  <Table.Row key={user.id}>
                    <Table.Cell>
                      <Typography.Text>{user.username}</Typography.Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Select
                        value={user.rank}
                        onChange={(e) => handleChangeRang(e)}
                      >
                        {rang.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.name}
                          </option>
                        ))}
                      </Select>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Rang;
