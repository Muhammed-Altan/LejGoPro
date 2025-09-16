// Types for booking calculation
export interface BookingModel {
  name: string;
  quantity: number;
  config: GoProPricingConfig;
}

export interface BookingAccessory {
  name: string;
  quantity: number;
  price?: number; // Optional, default to 70
}

/**
 * Calculates the total price for a booking including models, accessories, and insurance.
 * @param models Array of selected camera models with config and quantity
 * @param accessories Array of selected accessories with quantity
 * @param days Number of rental days
 * @param insurance Whether insurance is selected
 * @returns Total price (integer)
 */
export function calculateTotalBookingPrice({
  models,
  accessories,
  days,
  insurance
}: {
  models: BookingModel[];
  accessories: BookingAccessory[];
  days: number;
  insurance: boolean;
}): number {
  if (days < 3) days = 3;
  let total = 0;
  // Camera models
  for (const item of models) {
    total += calculatePriceWithConfig(item.config, days) * item.quantity;
  }
  // Accessories (default 70 DKK per booking, not per day)
  for (const item of accessories) {
    const accPrice = item.price ?? 70;
    total += item.quantity * accPrice;
  }
  // Insurance
  if (insurance) {
    total += 15 * days;
  }
  return Math.round(total);
}
// price-calculator.service.ts
// Service for calculating GoPro rental prices


// Interface for pricing config fetched from DB
export interface GoProPricingConfig {
  dailyPrice: number;      // Price per day for bookings under 7 days
  weeklyPrice: number;     // Price for exactly 7 days
  twoWeekPrice: number;    // Price for exactly 14 days
}

/**
 * Calculates the total rental price based on pricing config and rental days.
 * @param config GoProPricingConfig object (from DB)
 * @param days Number of rental days
 * @returns Total price (rounded integer)
 */
export function calculatePriceWithConfig(config: GoProPricingConfig, days: number): number {
  // Minimum booking is always 3 days
  if (days < 3) days = 3;

  let price = 0;

  if (days < 7) {
    // Daily price for under 7 days
    price = days * config.dailyPrice;
  } else if (days === 7) {
    // Fixed price for 7 days
    price = config.weeklyPrice;
  } else if (days > 7 && days < 14) {
    // For days between 8 and 13, use weeklyPrice/7 * days
    price = (config.weeklyPrice / 7) * days;
  } else if (days === 14) {
    // Fixed price for 14 days
    price = config.twoWeekPrice;
  } else {
    // 14-day price + discounted daily rate for days beyond 14
    const extraDayRate = config.twoWeekPrice / 14;
    price = config.twoWeekPrice + Math.round((days - 14) * extraDayRate);
  }

  // Always return the total price as an integer (rounded)
  return Math.round(price);
}
