export interface GoProPricingConfig {
  dailyPrice: number;
  weeklyPrice: number;
  twoWeekPrice: number;
}

export interface BookingModelItem {
  name: string;
  quantity: number;
  config: GoProPricingConfig;
}

export interface BookingAccessoryItem {
  name: string;
  quantity: number;
  price?: number;
}

export function calculatePriceWithConfig(config: GoProPricingConfig, days: number): number {
  if (days < 3) days = 3;
  let price = 0;
  if (days < 7) {
    price = days * config.dailyPrice;
  } else if (days === 7) {
    price = config.weeklyPrice;
  } else if (days > 7 && days < 14) {
    price = (config.weeklyPrice / 7) * days;
  } else if (days === 14) {
    price = config.twoWeekPrice;
  } else {
    const extraDayRate = config.twoWeekPrice / 14;
    price = config.twoWeekPrice + Math.round((days - 14) * extraDayRate);
  }
  return Math.round(price);
}

export function calculateTotalBookingPrice(params: {
  models: BookingModelItem[];
  accessories: BookingAccessoryItem[];
  days: number;
  insurance: boolean;
}): number {
  let { models, accessories, days, insurance } = params;
  if (days < 3) days = 3;
  let total = 0;
  for (const item of models) {
    total += calculatePriceWithConfig(item.config, days) * item.quantity;
  }
  for (const item of accessories) {
    const accPrice = item.price ?? 70;
    total += item.quantity * accPrice;
  }
  if (insurance) {
    total += 50 * days;
  }
  return Math.round(total);
}

export function diffDaysInclusive(startIso?: string | null, endIso?: string | null): number {
  if (!startIso || !endIso) return 0;
  const start = new Date(startIso);
  const end = new Date(endIso);
  const ms = end.getTime() - start.getTime();
  if (ms <= 0) return 0;
  const days = Math.ceil(ms / (1000 * 60 * 60 * 24));
  return days;
}