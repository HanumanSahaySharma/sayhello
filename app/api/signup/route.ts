import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    let { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required", status: 400 });
    }
    const isUserExits = await User.findOne({ email });
    if (isUserExits) {
      return NextResponse.json({ message: "This email already regiseted", status: 409 });
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    password = hashPassword;
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    return NextResponse.json({
      message: "Welcome to our community!:party_popper: We're thrilled to have you join us.",
      status: 201,
    });
  } catch (error) {
    console.log("SIGNUP_POST", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
};
