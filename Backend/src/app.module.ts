import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AccessoryService } from './accessory.service';
import { AccessoryController } from './accessory.controller';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { PriceController } from './price.controller';

@Module({
  imports: [],
  providers: [ProductService, AccessoryService, BookingService],
  controllers: [ProductController, AccessoryController, BookingController, PriceController],
})
export class AppModule {}