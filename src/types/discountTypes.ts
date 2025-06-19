export type ItemCategory = 'Clothing' | 'Accessories' | 'Electronics';

export interface CartItem {
  name: string;
  price: number;
  category: ItemCategory;
}

export type DiscountInput =
  | { type: 'fixed_amount'; amount: number }
  | { type: 'percentage'; percentage: number }
  | { type: 'category_percentage'; category: ItemCategory; percentage: number }
  | { type: 'point'; points: number }
  | { type: 'seasonal'; everyX: number; discountY: number };

export interface DiscountResult {
  totalBefore: number;
  totalAfter: number;
  breakdown: {
    type: string;
    amount: number;
  }[];
}
