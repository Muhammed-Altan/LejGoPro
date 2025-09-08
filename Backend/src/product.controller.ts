import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
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