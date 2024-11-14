import { connectToMongoDB } from "@libs/mongodb";
import { NextResponse } from "next/server";
import User from "@models/user";

export async function POST(req) {
  try {
    const { name, mobile, email, address, city, state, pinCode } =
      await req.json();

    await connectToMongoDB();

    const existingUser = await User.findOne({ $or: [{ mobile }, { email }] });

    if (existingUser) {
      const duplicateField =
        existingUser.mobile === mobile ? "mobile" : "email";
      return NextResponse.json(
        { duplicateField: duplicateField },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      name,
      mobile,
      email,
      address,
      city,
      state,
      pinCode,
    });

    return NextResponse.json(
      { message: "User successfully created.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
    const errorMessage = error.message;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
