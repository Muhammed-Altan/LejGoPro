import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async getProducts() {
    return prisma.product.findMany({ include: { cameras: true } });
  }

  async getAvailability(startDate: Date, endDate: Date) {
    const graceDays = 3;
    const bookingStart = new Date(startDate);
    bookingStart.setDate(bookingStart.getDate() - graceDays);
    const bookingEnd = new Date(endDate);
    bookingEnd.setDate(bookingEnd.getDate() + graceDays);

    const products = await prisma.product.findMany({ include: { cameras: true } });

    const result = [] as Array<{ productId: number; name: string; total: number; available: number }>;

    for (const product of products) {
      const cameraIds = product.cameras.map((c: any) => c.id);
      if (cameraIds.length === 0) {
        result.push({ productId: product.id, name: product.name, total: 0, available: 0 });
        continue;
      }

      const overlapping = await prisma.booking.groupBy({
        by: ['cameraId'],
        where: {
          cameraId: { in: cameraIds },
          startDate: { lte: bookingEnd },
          endDate: { gte: bookingStart },
        },
        _count: { cameraId: true },
      });
      const bookedSet = new Set(overlapping.map((o: any) => o.cameraId));
      const available = cameraIds.filter((id: number) => !bookedSet.has(id)).length;
      result.push({ productId: product.id, name: product.name, total: cameraIds.length, available });
    }

    return result;
  }

  async createProduct(data: any) {
    // Create product
    const product = await prisma.product.create({ data });
    // Create camera units for this product
    const cameras = [];
    for (let i = 0; i < product.quantity; i++) {
      cameras.push({
        productId: product.id,
        name: product.name, // Set camera name to product name
        dailyPrice: product.dailyPrice,
        weeklyPrice: product.weeklyPrice,
        twoWeekPrice: product.twoWeekPrice,
      });
    }
    await prisma.camera.createMany({ data: cameras });
    return product;
  }

  async getProduct(id: number) {
    return prisma.product.findUnique({ where: { id } });
  }
  async updateProduct(id: number, data: any) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }
  async deleteProduct(id: number) {
    return prisma.product.delete({
      where: { id },
    });
  }
}