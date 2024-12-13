"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/GetSession";
import { deleteUserById, getAllUsers } from "@/action/UserAction";

interface GetUserProps {
  _id: string;
  fullName: string;
  email: string;
  __v: number;
}

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState<GetUserProps[]>([]);

  const router = useRouter();

  useEffect(() => {
    const checkSession = async (): Promise<void> => {
      try {
        const session = await getSession();

        if (session?.user && session.user.role === "admin") {
          const users = await getAllUsers();

          setUserList(JSON.parse(users));
          setLoading(false);
        } else {
          router.push("/private/dashboard");
        }
      } catch (err) {
        console.error("Error checking session:", err);
      }
    };

    checkSession();
  }, [router]);

  const handleDelete = async (id: string) => {
    try {
      await deleteUserById(id);
      setUserList((prevUserList) =>
        prevUserList.filter((user) => user._id !== id)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {userList.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 px-4 py-2">#</th>
                <th className="border border-gray-700 px-4 py-2">Full Name</th>
                <th className="border border-gray-700 px-4 py-2">Email</th>
                <th className="border border-gray-700 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={user._id} className="even:bg-gray-800 odd:bg-gray-700">
                  <td className="border border-gray-700 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {user.fullName}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No users found</p>
      )}
    </div>
  );
};

export default Page;
