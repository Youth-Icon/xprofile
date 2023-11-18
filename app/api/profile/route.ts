// POST req to update profile on prisma

import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "@/backend/auth";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerAuthSession();
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
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
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (profile.id !== session.user.id) {
    res.status(403).json({ message: "Forbidden Request" });
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

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
