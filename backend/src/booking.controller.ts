import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async bookCamera(@Body() body: any) {
    const {
      cameraId,
      startDate,
      endDate,
      cameraName,
      productName,
      fullName,
      phone,
      email,
      address,
      apartment,
      postalCode,
      city,
      accessoryIds,
      totalPrice
    } = body;
    return this.bookingService.bookCamera(
      cameraId,
      new Date(startDate),
      new Date(endDate),
      cameraName,
      productName,
      fullName,
      phone,
      email,
      address,
      apartment,
      postalCode,
      city,
      accessoryIds,
      totalPrice
    );
  }

  @Get()
  async getAllBookings() {
    return this.bookingService.getAllBookings();
  }
  @Post('by-product')
  async bookByProduct(@Body() body: any) {
    const {
      productId,
      startDate,
      endDate,
      fullName,
      phone,
      email,
      address,
      apartment,
      postalCode,
      city,
      accessoryIds,
      totalPrice
    } = body;
    return this.bookingService.bookProduct(
      Number(productId),
      new Date(startDate),
      new Date(endDate),
      fullName,
      phone,
      email,
      address,
      apartment,
      postalCode,
      city,
      accessoryIds,
      totalPrice
    );
  }

  @Get('camera/:cameraId')
  async getBookingsForCamera(@Param('cameraId') cameraId: string) {
    return this.bookingService.getBookingsForCamera(Number(cameraId));
  }
}
