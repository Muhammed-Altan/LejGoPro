import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

@Controller('accessory-instance')
export class AccessoryInstanceController {
  @Get(':accessoryId')
  async getInstances(@Param('accessoryId') accessoryId: string) {
    return prisma.accessoryInstance.findMany({
      where: { accessoryId: Number(accessoryId) },
      include: { bookings: true }
    });
  }

  @Post()
  async createInstance(@Body() body: any) {
    return prisma.accessoryInstance.create({ data: body });
  }
}
