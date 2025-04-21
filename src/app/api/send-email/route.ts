import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abdo.jhon2023@gmail.com",
      pass: "ccebspecpqvomdjd",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "abdo.jhon2023@gmail.com",
      subject: `New message from ${email} via Abdo Jhon Portfolio`,
      text: message,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
