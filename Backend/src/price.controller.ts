import { Controller, Post, Body } from '@nestjs/common';
import { calculateTotalBookingPrice, calculatePriceWithConfig, GoProPricingConfig } from './price-calculator.service';

@Controller('price')
export class PriceController {
  @Post('quote')
  getQuote(@Body() body: any) {
    // Expect: { models: [{ name, quantity, config }], accessories: [{ name, quantity, price }], days, insurance }
    const { models, accessories, days, insurance } = body;
    if (!Array.isArray(models) || typeof days !== 'number') {
      return { error: 'Invalid payload' };
    }
    // Validate configs
    const safeModels = models.map((m: any) => ({
      name: m.name,
      quantity: m.quantity,
      config: m.config as GoProPricingConfig,
    }));
    const safeAccessories = Array.isArray(accessories) ? accessories.map((a: any) => ({
      name: a.name,
      quantity: a.quantity,
      price: a.price,
    })) : [];
    // Calculate breakdown
    const insuranceAmount = !!insurance ? 15 * days : 0;
    const breakdown = {
      models: safeModels.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        price: calculatePriceWithConfig(item.config, days) * item.quantity,
      })),
      accessories: safeAccessories.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        price: (item.price ?? 70) * item.quantity,
      })),
      insurance: insuranceAmount,
    };
    const total =
      breakdown.models.reduce((sum, m) => sum + m.price, 0) +
      breakdown.accessories.reduce((sum, a) => sum + a.price, 0) +
      breakdown.insurance;
    return { total, breakdown };
  }
}