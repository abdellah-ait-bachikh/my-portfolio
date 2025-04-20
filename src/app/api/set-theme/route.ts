import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { theme } = await req.json();

  if (theme !== "light" && theme !== "dark") {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("theme", theme, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, 
  });

  return response;
}
