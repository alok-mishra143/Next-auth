"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSession } from "@/lib/GetSession";

const DashboardPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        console.log("Session:", session);
        if (!session?.user) {
          router.push("/login");
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error checking session:", err);
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-white text-2xl">1 Day Revenue</CardTitle>
            <CardDescription className="text-gray-300">
              $500 <span className="text-green-400">(+5%)</span>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-white text-2xl">7 Day Revenue</CardTitle>
            <CardDescription className="text-gray-300">
              $3,500 <span className="text-red-400">(-2%)</span>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              30 Day Revenue
            </CardTitle>
            <CardDescription className="text-gray-300">
              $15,000 <span className="text-green-400">(+10%)</span>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Total Sales</CardTitle>
          <CardDescription className="text-gray-400">
            A summary of recent purchases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="text-gray-200">
            <TableCaption className="text-gray-400">
              List of users and their purchases
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Purchase Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john.doe@example.com</TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane.smith@example.com</TableCell>
                <TableCell>$150</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mike Johnson</TableCell>
                <TableCell>mike.johnson@example.com</TableCell>
                <TableCell>$300</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sophia Brown</TableCell>
                <TableCell>sophia.brown@example.com</TableCell>
                <TableCell>$400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>David Lee</TableCell>
                <TableCell>david.lee@example.com</TableCell>
                <TableCell>$200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Emma Wilson</TableCell>
                <TableCell>emma.wilson@example.com</TableCell>
                <TableCell>$500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="text-gray-400 text-sm">
          Data updated 5 minutes ago
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardPage;
