import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

@Controller('accessory-booking')
export class AccessoryBookingController {
  @Get(':instanceId')
  async getBookings(@Param('instanceId') instanceId: string) {
    return prisma.accessoryBooking.findMany({
      where: { accessoryInstanceId: Number(instanceId) }
    });
  }

  @Post()
  async createBooking(@Body() body: any) {
    return prisma.accessoryBooking.create({ data: body });
  }
}
