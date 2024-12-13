"use server";

import { signIn } from "@/auth";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

interface LoginUserProps {
  email: string;
  password: string;
}
interface RegisterUserProps {
  Name: string;
  email: string;
  password: string;
}

export const LoginUser = async ({ email, password }: LoginUserProps) => {
  if (!email || !password) {
    throw new Error("Please fill all fields");
  }
  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    return someError.cause;
  }
  redirect("/");
};

export const RegisterUser = async ({
  Name,
  email,
  password,
}: RegisterUserProps) => {
  if (!Name || !email || !password) {
    return { status: "error", message: "Please fill all fields" };
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { status: "error", message: "User already exists" };
  }

  const newPassword = await bcrypt.hashSync(password, 10);

  await User.create({ fullName: Name, email, password: newPassword });
  return { status: "success", message: "User registered successfully" };
};
