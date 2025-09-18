-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "popular" BOOLEAN NOT NULL DEFAULT false,
    "dailyPrice" INTEGER NOT NULL,
    "weeklyPrice" INTEGER NOT NULL,
    "twoWeekPrice" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Accessory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccessoryInstance" (
    "id" SERIAL NOT NULL,
    "accessoryId" INTEGER NOT NULL,

    CONSTRAINT "AccessoryInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccessoryBooking" (
    "id" SERIAL NOT NULL,
    "accessoryInstanceId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "customerName" TEXT,
    "status" TEXT DEFAULT 'Booked',

    CONSTRAINT "AccessoryBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Camera" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT,
    "dailyPrice" INTEGER NOT NULL,
    "weeklyPrice" INTEGER NOT NULL,
    "twoWeekPrice" INTEGER NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Booking" (
    "id" SERIAL NOT NULL,
    "cameraId" INTEGER NOT NULL,
    "cameraName" TEXT,
    "productName" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."AccessoryInstance" ADD CONSTRAINT "AccessoryInstance_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "public"."Accessory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccessoryBooking" ADD CONSTRAINT "AccessoryBooking_accessoryInstanceId_fkey" FOREIGN KEY ("accessoryInstanceId") REFERENCES "public"."AccessoryInstance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Camera" ADD CONSTRAINT "Camera_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "public"."Camera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
