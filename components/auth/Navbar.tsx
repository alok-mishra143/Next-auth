"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/GetSession";
import { handlesignOut } from "@/action/UserAction";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check session
  const checkSession = async () => {
    try {
      const session = await getSession();
      if (session) {
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.error("Error checking session:", err);
    }
  };

  // Call checkSession on component mount
  useEffect(() => {
    checkSession();
  }, [router]);

  // Logout function
  const handleLogout = async () => {
    console.log("Logging out...");
    try {
      setIsLoggedIn(false); // Update login state
      await handlesignOut();
      console.log("Logged out successfully");
      router.push("/login"); // Redirect to login page after logout
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

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
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="text-white hover:text-gray-300 hover:underline transition-all ease-in-out"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-white hover:text-gray-300 hover:underline transition-all ease-in-out"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/private/dashboard"
                className="text-white hover:text-gray-300 hover:underline transition-all ease-in-out"
              >
                Dashboard
              </Link>
              <Button
                className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
