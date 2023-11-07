/*
  Warnings:

  - You are about to drop the column `showGithubGraph` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "showGithubGraph";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified";
