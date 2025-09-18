import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class BookingService {
  async bookCamera(
    cameraId: number,
    startDate: Date,
    endDate: Date,
    cameraName: string | undefined,
    productName: string | undefined,
    fullName: string,
    phone: string,
    email: string,
    address: string,
    apartment: string | undefined,
    postalCode: string,
    city: string,
  accessoryInstanceIds: number[],
    totalPrice: number
  ) {
    // Add 3 day grace period before and after
    const graceDays = 3;
    const bookingStart = new Date(startDate);
    bookingStart.setDate(bookingStart.getDate() - graceDays);
    const bookingEnd = new Date(endDate);
    bookingEnd.setDate(bookingEnd.getDate() + graceDays);

    // Check for overlapping bookings
    const overlapping = await prisma.booking.findMany({
      where: {
        cameraId,
        OR: [
          {
            startDate: { lte: bookingEnd },
            endDate: { gte: bookingStart }
          }
        ]
      }
    });
    if (overlapping.length > 0) {
      throw new Error('Camera is already booked for these dates');
    }
    // Create booking
    const booking = await prisma.booking.create({
      data: {
        cameraId,
        cameraName,
        productName,
        startDate: bookingStart,
        endDate: bookingEnd,
        fullName,
        phone,
        email,
        address,
        apartment,
        postalCode,
        city,
        accessoryInstanceIds: Array.isArray(accessoryInstanceIds) ? accessoryInstanceIds.filter(x => x != null) : [],
        totalPrice
      }
    });

    // Create accessory bookings
    for (const instanceId of accessoryInstanceIds || []) {
      const accessoryBookingData = {
        accessoryInstanceId: instanceId,
        startDate: bookingStart,
        endDate: bookingEnd,
        customerName: fullName,
        status: 'Booked'
      };
      console.log('Creating accessory booking:', accessoryBookingData);
      await prisma.accessoryBooking.create({ data: accessoryBookingData });
    }
    return booking;
  }

  // Book by product: find a free camera for the product within the period (with grace days)
  async bookProduct(
    productId: number,
    startDate: Date,
    endDate: Date,
    fullName: string,
    phone: string,
    email: string,
    address: string,
    apartment: string | undefined,
    postalCode: string,
    city: string,
  accessoryInstanceIds: number[],
    totalPrice: number
  ) {
    const graceDays = 3;
    const bookingStart = new Date(startDate);
    bookingStart.setDate(bookingStart.getDate() - graceDays);
    const bookingEnd = new Date(endDate);
    bookingEnd.setDate(bookingEnd.getDate() + graceDays);

    // Find cameras for product
    const cameras = await prisma.camera.findMany({ where: { productId } });
    if (cameras.length === 0) {
      throw new Error('No cameras found for this product');
    }

    // For each camera, check if there are overlapping bookings
    for (const cam of cameras) {
      const overlapping = await prisma.booking.findFirst({
        where: {
          cameraId: cam.id,
          startDate: { lte: bookingEnd },
          endDate: { gte: bookingStart },
        },
      });
      if (!overlapping) {
        // Create booking using this free camera
        const product = await prisma.product.findUnique({ where: { id: productId } });
        const booking = await prisma.booking.create({
          data: {
            cameraId: cam.id,
            cameraName: cam.name ?? product?.name ?? undefined,
            productName: product?.name,
            startDate: startDate,
            endDate: endDate,
            fullName,
            phone,
            email,
            address,
            apartment,
            postalCode,
            city,
            accessoryInstanceIds: Array.isArray(accessoryInstanceIds) ? accessoryInstanceIds.filter(x => x != null) : [],
            totalPrice
          },
        });
        // Create accessory bookings
        for (const instanceId of accessoryInstanceIds || []) {
          const accessoryBookingData = {
            accessoryInstanceId: instanceId,
            startDate: startDate,
            endDate: endDate,
            customerName: fullName,
            status: 'Booked'
          };
          console.log('Creating accessory booking:', accessoryBookingData);
          await prisma.accessoryBooking.create({ data: accessoryBookingData });
        }
        return booking;
      }
    }

    throw new Error('No available cameras for these dates');
  }

  async getBookingsForCamera(cameraId: number) {
    return prisma.booking.findMany({
      where: { cameraId },
      orderBy: { startDate: 'asc' }
    });
  }
  async getAllBookings() {
    return prisma.booking.findMany();
  }
}
