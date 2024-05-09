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
import { toast, useToast } from "../../../@/components/ui/use-toast";
import EditUser from "./EditUser";
import { getUsers } from "../../lib/load-users";
import { useQuery } from "@tanstack/react-query";
import UserListSkeleton from "../skeletons/UserListSkeleton";

interface User {
  id: number;
  email: string;
  age: string;
  name: string;
}

const deleteUser = async (id: number) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/delete-user/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    toast({ description: "User deleted successfully!" });

    return response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export default function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  if (isLoading) {
    return <UserListSkeleton />;
  }

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
          {data?.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <button
                  className="bg-red-400 p-2 rounded-md"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </TableCell>
              <TableCell>
                <EditUser
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  age={user.age}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
