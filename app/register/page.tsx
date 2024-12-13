import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Register
        </h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="fullname" className="text-white block mb-2">
              Full Name
            </Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-700"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-white block mb-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-700"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Register
          </Button>
        </form>

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
