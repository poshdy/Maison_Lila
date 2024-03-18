-- DropForeignKey
ALTER TABLE "productAttribute" DROP CONSTRAINT "productAttribute_productId_fkey";

-- DropForeignKey
ALTER TABLE "productInventory" DROP CONSTRAINT "productInventory_productId_fkey";

-- AddForeignKey
ALTER TABLE "productInventory" ADD CONSTRAINT "productInventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productAttribute" ADD CONSTRAINT "productAttribute_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
