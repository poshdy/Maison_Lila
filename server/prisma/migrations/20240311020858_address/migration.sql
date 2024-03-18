-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_zoneId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "zoneId" DROP NOT NULL,
ALTER COLUMN "zoneId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;
