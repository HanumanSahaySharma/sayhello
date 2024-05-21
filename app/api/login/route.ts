import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required", status: 400 });
    }
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }
    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ message: "Invalid password", status: 401 });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.NEXT_JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    const { password: pass, ...rest } = user._doc;
    const response = NextResponse.json({ user: rest, message: "Login successfully", status: 200 });
    response.headers.set("Set-Cookie", `access_token=${token}; HttpOnly;`);
    return response;
  } catch (error) {
    console.log("LOGIN_POST", error);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
};
