# 🛍️ Discount Module App - Take Home Assignment

**Author**: Chawalit Marayat  
**Position Applied**: Fullstack Developer (Junior)  
**Company**: Playtorium Solutions

## 📌 Objective

This project implements a **discount calculation module** based on a set of defined campaign rules (Coupon > On Top > Seasonal).  
It includes a professional UI built with **Next.js, TypeScript, Tailwind CSS**, and covers multiple discount types applied to shopping cart items.

---

## 🧠 Features

- ✅ Predefined product list with category/price
- ✅ Add items to cart from product catalog
- ✅ Support for multiple discount types:
  - Fixed amount coupon
  - Percentage discount
  - Category-based discount
  - Points-based discount (max 20% of total)
  - Seasonal (every X baht, get Y baht off)
- ✅ Apply discount order correctly: **Coupon > On Top > Seasonal**
- ✅ Summary display of final price and discount breakdown
- ✅ Typed with TypeScript, unit-tested with Jest

---

## 📂 Tech Stack

| Area       | Technology               |
| ---------- | ------------------------ |
| Frontend   | Next.js (App Router)     |
| Language   | TypeScript               |
| Styling    | Tailwind CSS             |
| UI Library | shadcn/ui + lucide-react |
| Testing    | Jest + ts-jest           |

---

## 📄 Assumptions

- Only one discount can be applied per **category** (Coupon/On Top/Seasonal)
- Points discount is capped at 20% of the cart total
- Discounts are applied in this exact order: **Coupon → On Top → Seasonal**
- Cart item list is static and selected by user from a predefined product catalog
- No backend or database is used (in-memory only)

---

## 🚀 Getting Started

```bash
# 1. Clone project
git clone https://github.com/marayatdev/playtorium-discount.git
cd playtorium-discount

# 2. Install dependencies
yarn

# 3. Run locally
yarn dev

# 4. Run tests
yarn test
```
