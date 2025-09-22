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
    // Calculate total using new discount logic
    const total = calculateTotalBookingPrice({
      models: safeModels,
      accessories: safeAccessories,
      days,
      insurance: !!insurance,
    });

    // For breakdown, apply discount globally: first camera full price, rest 25% off
    let cameraCount = 0;
    let discountAmount = 0;
    const modelBreakdown = safeModels.map((item: any) => {
      const basePrice = calculatePriceWithConfig(item.config, days);
      let price = 0;
      for (let i = 0; i < item.quantity; i++) {
        if (cameraCount === 0) {
          price += basePrice;
        } else {
          price += basePrice * 0.75;
          discountAmount += basePrice * 0.25;
        }
        cameraCount++;
      }
      return {
        name: item.name,
        quantity: item.quantity,
        price: Math.round(price),
      };
    });
    const accessoryBreakdown = safeAccessories.map((item: any) => ({
      name: item.name,
      quantity: item.quantity,
      price: (item.price ?? 70) * item.quantity,
    }));
    const insuranceAmount = !!insurance ? 15 * days : 0;
    const breakdown = {
      models: modelBreakdown,
      accessories: accessoryBreakdown,
      insurance: insuranceAmount,
      discount: discountAmount > 0 ? Math.round(discountAmount) : undefined,
    };
    return { total, breakdown };
  }
}