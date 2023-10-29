import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // say hi as response
  return NextResponse.json({ message: "hi" });
}
