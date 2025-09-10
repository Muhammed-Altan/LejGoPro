import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class AccessoryService {
  async getAccessoryList() {
    return prisma.accessory.findMany();
  }

  async getAccessory(id: number) {
    return prisma.accessory.findUnique({ where: { id } });
  }

  async createAccessory(data: any) {
    return prisma.accessory.create({ data });
  }

  async updateAccessory(id: number, data: any) {
    return prisma.accessory.update({ where: { id }, data });
  }

  async deleteAccessory(id: number) {
    return prisma.accessory.delete({ where: { id } });
  }
}
