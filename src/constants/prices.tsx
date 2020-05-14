import { SizeOption, CrustOption } from '../types/types';

export const SIZE_PRICES: Record<SizeOption, number> = {
  'Small': 8,
  'Medium': 10,
  'Large': 12,
};
export const CRUST_PRICES: Record<CrustOption, number> = {
  'Thin': 2,
  'Thick': 4,
};

export const MAX_TOPPINGS = 3;
export const ADDITIONAL_TOPPINGS_PRICE = 0.50; 