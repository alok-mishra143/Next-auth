/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RegisterUser } from "@/action/UserAction";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/GetSession";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // Session check with minimal dependency
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        if (session?.user) {
          router.replace("/login");
        }
      } catch (err) {
        console.error("Session check failed:", err);
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await RegisterUser({ Name: name, email, password });

      if (response?.status === "success") {
        setMessage("User registered successfully!");
        setMessageType("success");
        router.replace("/");
      } else if (response?.status === "user_exists") {
        setMessage("User already exists.");
        setMessageType("error");
      } else {
        setMessage("Something went wrong. Please try again.");
        setMessageType("error");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="fullname" className="text-white block mb-2">
              Full Name
            </Label>
            <Input
              name="fullname"
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-white block mb-2">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white block mb-2">
              Password
            </Label>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
        {message && (
          <p
            className={`text-center mt-4 ${
              messageType === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
