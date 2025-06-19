"use client"
import { useState } from "react";
import { Cart } from "@/components/Cart";
import { DiscountSelector } from "@/components/DiscountSelector";
import { Summary } from "@/components/Summary";
import { calculateFinalPrice } from "@/utils/discountEngine";
import { CartItem, DiscountInput, DiscountResult } from "@/types/discountTypes";

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discounts, setDiscounts] = useState<DiscountInput[]>([]);
  const [result, setResult] = useState<DiscountResult | null>(null);

  const handleCalculate = () => {
    const r = calculateFinalPrice(cart, discounts);
    setResult(r);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🛍️ Discount Module</h1>
      <Cart cart={cart} setCart={setCart} />
      <DiscountSelector discounts={discounts} setDiscounts={setDiscounts} />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleCalculate}
      >
        Calculate Final Price
      </button>
      {result && <Summary result={result} />}
    </main>
  );
}
