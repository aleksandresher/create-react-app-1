"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";

interface User {
  id: string;
  email: string;
  age: string;
  name: string;
}

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-users");
    const { users } = await response.json();
    return users.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);
  return (
    <div className="w-full">
      <Table className="w-8/12">
        <TableCaption>A list of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <span className="flex justify-start">Name</span>
            </TableHead>
            <TableHead>
              <span className="flex justify-start">Email</span>
            </TableHead>
            <TableHead>
              <span className="flex justify-start">Age</span>
            </TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <button className="bg-red-400 p-2 rounded-md">Delete</button>
              </TableCell>
              <TableCell>
                <button className="bg-[#55c055] p-2 rounded-md">Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
