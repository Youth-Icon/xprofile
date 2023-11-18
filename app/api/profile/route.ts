// POST req to update profile on prisma

import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "@/backend/auth";
import prisma from "@/lib/prisma";

export default async function POST(
  req: Request
) {
  const session = await getServerAuthSession();
  if (!session) {
    NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    return;
  }
  const { body } = req;
  console.log(session)

  const profile = await prisma.user.findUnique({
    where: {
      id: session.user.id as string,
    },
  });

  if (!profile) {
    NextResponse.json({ message: "User not found" }, { status: 404 });
    return;
  }

  if (profile.id !== session.user.id) {
    NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    return;
  }

  try {
    const updatedProfile = await prisma.user.update({
      where: {
        id: session.user.id as string,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(updatedProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
