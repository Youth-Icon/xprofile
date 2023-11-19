import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  params: { params: { username: string } }
) {
  // params is an object with the route parameters
  const username = params.params.username;

  // check if the username exists in the database
  // if not, return a 404

  const user = await prisma.user.findUnique({
    where: {
      username: username as string,
    },
  });

  if (!user) {
    return new Response(`User ${username} not found`, {
      status: 404,
    });
  }

  try {
    const profile = await prisma.user.findUnique({
      where: {
        username: user.username as string,
      },
      include: {
        Links: true,
        Socials: true,
        Followers: true,
        Following: true,
        Projects: true,
      },
    });

    return new Response(JSON.stringify(profile), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}
