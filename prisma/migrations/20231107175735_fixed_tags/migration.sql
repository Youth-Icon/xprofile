/*
  Warnings:

  - You are about to drop the column `Tags` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "Tags",
ADD COLUMN     "tags" TEXT[];
