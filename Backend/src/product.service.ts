import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async getProducts() {
    return prisma.product.findMany();
  }

  async createProduct(data: { name: string; dailyPrice: number; weeklyPrice: number; twoWeekPrice: number; price: number }) {
    return prisma.product.create({
      data,
    });
  }
}