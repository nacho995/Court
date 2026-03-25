/*
  Warnings:

  - You are about to drop the column `date` on the `Booking` table. All the data in the column will be lost.
  - The `status` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `occupied` on the `Court` table. All the data in the column will be lost.
  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `indoor` to the `Court` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surface` to the `Court` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Court` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level` on the `Member` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MemberLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'PRO');

-- CreateEnum
CREATE TYPE "CourtType" AS ENUM ('TENNIS', 'PADEL', 'SQUASH', 'BADMINTON');

-- CreateEnum
CREATE TYPE "Surface" AS ENUM ('CLAY', 'HARD', 'GRASS', 'SYNTHETIC');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courtId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_memberId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "date",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Court" DROP COLUMN "occupied",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "indoor" BOOLEAN NOT NULL,
ADD COLUMN     "surface" "Surface" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "CourtType" NOT NULL;

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "level",
ADD COLUMN     "level" "MemberLevel" NOT NULL;

-- DropTable
DROP TABLE "Lesson";
