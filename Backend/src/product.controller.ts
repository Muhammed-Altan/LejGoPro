import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(Number(id));
  }

  @Get('availability/range')
  getAvailability(@Query('start') start: string, @Query('end') end: string) {
    if (!start || !end) {
      throw new Error('start and end query params are required');
    }
    return this.productService.getAvailability(new Date(start), new Date(end));
  }

  @Post()
  createProduct(@Body() body: any) {
    return this.productService.createProduct(body);
  }
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return this.productService.updateProduct(Number(id), body);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(Number(id));

  }
}