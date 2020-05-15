export type CrustOption = 'Thin' | 'Thick';

export type SizeOption = 'Small' | 'Medium' | 'Large';

export type Pizza = {
  size: SizeOption;
  crust: CrustOption;
  toppings: string[];
};
