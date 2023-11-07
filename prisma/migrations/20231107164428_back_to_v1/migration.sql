/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "updatedAt",
ADD COLUMN     "password" TEXT,
ADD COLUMN     "showGithubGraph" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3);
