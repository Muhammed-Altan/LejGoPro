import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AccessoryService } from './accessory.service';
import { AccessoryController } from './accessory.controller';

@Module({
  imports: [],
  providers: [ProductService, AccessoryService],
  controllers: [ProductController, AccessoryController],
})
export class AppModule {}