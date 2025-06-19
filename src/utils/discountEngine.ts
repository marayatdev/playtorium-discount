import { CartItem, DiscountInput, DiscountResult } from '@/types/discountTypes';

export function calculateFinalPrice(cart: CartItem[], discounts: DiscountInput[]): DiscountResult {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  const breakdown: { type: string; amount: number }[] = [];

  const coupon = discounts.find(d => d.type === 'fixed_amount' || d.type === 'percentage');
  const onTop = discounts.filter(d => d.type === 'category_percentage' || d.type === 'point');
  const seasonal = discounts.find(d => d.type === 'seasonal');

  if (coupon) {
    if (coupon.type === 'fixed_amount') {
      total -= coupon.amount;
      breakdown.push({ type: 'fixed_amount', amount: coupon.amount });
    }
    if (coupon.type === 'percentage') {
      const discount = total * (coupon.percentage / 100);
      total -= discount;
      breakdown.push({ type: 'percentage', amount: discount });
    }
  }

  for (const d of onTop) {
    if (d.type === 'category_percentage') {
      const categoryTotal = cart
        .filter(i => i.category === d.category)
        .reduce((sum, i) => sum + i.price, 0);
      const discount = categoryTotal * (d.percentage / 100);
      total -= discount;
      breakdown.push({ type: 'category_percentage', amount: discount });
    }
    if (d.type === 'point') {
      const maxAllowed = total * 0.2;
      const discount = Math.min(d.points, maxAllowed);
      total -= discount;
      breakdown.push({ type: 'point', amount: discount });
    }
  }

  if (seasonal) {
    const steps = Math.floor(total / seasonal.everyX);
    const discount = steps * seasonal.discountY;
    total -= discount;
    breakdown.push({ type: 'seasonal', amount: discount });
  }

  return {
    totalBefore: cart.reduce((sum, item) => sum + item.price, 0),
    totalAfter: Math.max(0, parseFloat(total.toFixed(2))),
    breakdown,
  };
}
