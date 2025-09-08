import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(@Body() body: { name: string; dailyPrice: number; weeklyPrice: number; twoWeekPrice: number; price?: number }) {
    // price is optional/legacy, can be omitted
    return this.productService.createProduct({
      name: body.name,
      dailyPrice: body.dailyPrice,
      weeklyPrice: body.weeklyPrice,
      twoWeekPrice: body.twoWeekPrice,
      price: body.price
    });
  }
}