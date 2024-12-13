import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          MyApp
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className=" text-white hover:text-gray-300 hover:underline transition-all ease-in-out "
          >
            Login
          </Link>
          <Link
            href="/register"
            className=" text-white hover:text-gray-300 hover:underline transition-all ease-in-out "
          >
            Register
          </Link>
          <Link
            href="/private/dashboard"
            className=" text-white hover:text-gray-300 hover:underline transition-all ease-in-out "
          >
            Dashboard
          </Link>
          <Button className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
