import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full  bg-gray-700"
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
            Login
          </Button>
        </form>

        <div className="mt-6">
          <p className="text-gray-400 text-center mb-4">Or login with</p>
          <form>
            <div className="flex justify-center space-x-4">
              <Button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                <FaGithub className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                <FaGoogle className="w-5 h-5 mr-2" />
                Google
              </Button>
            </div>
          </form>
        </div>

        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
