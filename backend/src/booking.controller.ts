import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  @Delete(':id')
  async deleteBooking(@Param('id') id: string) {
    try {
      return await this.bookingService.deleteBooking(Number(id));
    } catch (error) {
      console.error('DELETE /bookings/:id error:', error);
      throw error;
    }
  }
  @Patch(':id')
  async updateBooking(@Param('id') id: string, @Body() body: any) {
    try {
      return await this.bookingService.updateBooking(Number(id), body);
    } catch (error) {
      console.error('PATCH /bookings/:id error:', error);
      throw error;
    }
  }
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
      accessoryInstanceIds,
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
      accessoryInstanceIds,
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
      accessoryInstanceIds,
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
      accessoryInstanceIds,
      totalPrice
    );
  }

  @Get('camera/:cameraId')
  async getBookingsForCamera(@Param('cameraId') cameraId: string) {
    return this.bookingService.getBookingsForCamera(Number(cameraId));
  }
}
