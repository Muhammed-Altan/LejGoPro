import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccessoryService } from './accessory.service';

@Controller('accessory')
export class AccessoryController {
  constructor(private readonly accessoryService: AccessoryService) {}

  @Get()
  getAccessoryList() {
    return this.accessoryService.getAccessoryList();
  }

  @Get(':id')
  getAccessory(@Param('id') id: string) {
    return this.accessoryService.getAccessory(Number(id));
  }

  @Post()
  createAccessory(@Body() body: any) {
    return this.accessoryService.createAccessory(body);
  }

  @Put(':id')
  updateAccessory(@Param('id') id: string, @Body() body: any) {
    return this.accessoryService.updateAccessory(Number(id), body);
  }

  @Delete(':id')
  deleteAccessory(@Param('id') id: string) {
    return this.accessoryService.deleteAccessory(Number(id));
  }
}
