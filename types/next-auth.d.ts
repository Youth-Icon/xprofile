import NextAuth from "next-auth";

type UserId = string;

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
    };
  }
  interface User {
    username: string;
    completedProfile: boolean;
  }
}
