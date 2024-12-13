// users.json (sample data)

"use client";
export const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Emily Johnson", email: "emily@example.com" },
];

// page.jsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const [userList, setUserList] = useState(users);

  const handleDelete = (id: number) => {
    const updatedUsers = userList.filter((user) => user.id !== id);
    setUserList(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col items-center  ">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-100">
        User Management
      </h1>
      <div className="flex items-center justify-center max-w-5">
        <Table className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-md">
          <TableCaption className="text-gray-400">
            Manage your users effectively
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left text-gray-300">ID</TableHead>
              <TableHead className="text-left text-gray-300">Name</TableHead>
              <TableHead className="text-left text-gray-300">Email</TableHead>
              <TableHead className="text-left text-gray-300">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userList.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-700">
                <TableCell className="py-2 px-4 border-b border-gray-700">
                  {user.id}
                </TableCell>
                <TableCell className="py-2 px-4 border-b border-gray-700">
                  {user.name}
                </TableCell>
                <TableCell className="py-2 px-4 border-b border-gray-700">
                  {user.email}
                </TableCell>
                <TableCell className="py-2 px-4 border-b border-gray-700">
                  <button
                    className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
