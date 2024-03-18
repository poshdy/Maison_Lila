/*
  Warnings:

  - You are about to drop the column `place` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `Slider` table. All the data in the column will be lost.
  - You are about to drop the `BottomImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LOCATION" AS ENUM ('TOP', 'BOTTOM');

-- CreateEnum
CREATE TYPE "ACTION" AS ENUM ('home', 'shop', 'customized_order');

-- AlterTable
ALTER TABLE "Banner" DROP COLUMN "place",
ADD COLUMN     "action" "ACTION" NOT NULL DEFAULT 'home',
ADD COLUMN     "location" "LOCATION" NOT NULL DEFAULT 'TOP';

-- AlterTable
ALTER TABLE "Slider" DROP COLUMN "place";

-- AlterTable
ALTER TABLE "Zone" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "BottomImage";

-- DropEnum
DROP TYPE "PLACE";
