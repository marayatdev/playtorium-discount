import { CartItem, DiscountInput } from '@/types/discountTypes';
import { calculateFinalPrice } from '../utils/discountEngine';

describe('calculateFinalPrice', () => {
  const cart: CartItem[] = [
    { name: 'T-Shirt', price: 350, category: 'Clothing' },
    { name: 'Hat', price: 250, category: 'Accessories' },
    { name: 'Belt', price: 230, category: 'Accessories' },
  ];

  it('applies fixed amount discount', () => {
    const discounts: DiscountInput[] = [{ type: 'fixed_amount', amount: 100 }];
    const result = calculateFinalPrice(cart, discounts);
    expect(result.totalAfter).toBe(730); // 830 - 100
  });

  it('applies percentage coupon', () => {
    const discounts: DiscountInput[] = [{ type: 'percentage', percentage: 10 }];
    const result = calculateFinalPrice(cart, discounts);
    expect(result.totalAfter).toBe(747); // 830 - 10%
  });

  it('applies point discount (below 20%)', () => {
    const discounts: DiscountInput[] = [{ type: 'point', points: 50 }];
    const result = calculateFinalPrice(cart, discounts);
    expect(result.totalAfter).toBe(780); // 830 - 50
  });

  it('applies point discount (cap at 20%)', () => {
    const discounts: DiscountInput[] = [{ type: 'point', points: 500 }];
    const result = calculateFinalPrice(cart, discounts);
    expect(result.totalAfter).toBe(664); // 830 - (20% of 830) = 166
  });
});
