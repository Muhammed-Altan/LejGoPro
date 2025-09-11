import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class BookingService {
  async bookCamera(cameraId: number, startDate: Date, endDate: Date, cameraName?: string, productName?: string) {
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
    return prisma.booking.create({
      data: {
        cameraId,
        cameraName,
        productName,
        startDate: bookingStart,
        endDate: bookingEnd
      }
    });
  }

  async getBookingsForCamera(cameraId: number) {
    return prisma.booking.findMany({
      where: { cameraId },
      orderBy: { startDate: 'asc' }
    });
  }
}
