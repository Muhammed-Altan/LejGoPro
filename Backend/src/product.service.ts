import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async getProducts() {
    return prisma.product.findMany({ include: { cameras: true } });
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