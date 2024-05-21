import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    let { name, email, password } = await req.json();

    // check the all field are filled out or not
    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required.", status: 400 });
    }
    // Check the email is valid or not
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!email.match(regex)) {
      return NextResponse.json({ message: "Invalid email address.", status: 400 });
    }
    // Check the password length
    if (password.length < 5) {
      return NextResponse.json({ message: "Password should be at least 5 charactors.", status: 400 });
    }
    // Check if user is already exits or not
    const isUserExits = await User.findOne({ email });
    if (isUserExits) {
      return NextResponse.json({ message: "This email already regiseted.", status: 409 });
    }
    // Convert password into secure hashed password
    const hashPassword = bcryptjs.hashSync(password, 10);
    password = hashPassword;
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    return NextResponse.json({
      message: "Welcome to our community! We're thrilled to have you join us.",
      status: 201,
    });
  } catch (error) {
    console.log("SIGNUP_POST", error);
    return NextResponse.json({ message: "Internal server error.", status: 500 });
  }
};
