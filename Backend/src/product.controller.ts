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
  createProduct(@Body() body: { name: string; price: number }) {
    return this.productService.createProduct(body.name, body.price);
  }
}