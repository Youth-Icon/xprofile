/*
  Warnings:

  - You are about to drop the column `password` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "password",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
