import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async getProducts() {
    return prisma.product.findMany();
  }

  async createProduct(data: any) {
    return prisma.product.create({ data });
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