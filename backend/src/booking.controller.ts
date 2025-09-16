import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async bookCamera(@Body() body: any) {
    const { cameraId, startDate, endDate, cameraName, productName } = body;
    return this.bookingService.bookCamera(cameraId, new Date(startDate), new Date(endDate), cameraName, productName);
  }

  @Get()
  async getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  @Get('camera/:cameraId')
  async getBookingsForCamera(@Param('cameraId') cameraId: string) {
    return this.bookingService.getBookingsForCamera(Number(cameraId));
  }
}
