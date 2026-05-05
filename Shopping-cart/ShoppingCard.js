import { cart, COUPONS } from "./data.js";

function applyCoupon(code, items) {
  const coupon = COUPONS[code.toUpperCase()];
  if (!coupon) throw new Error(`Nieznany kupon: ${code}`);

  const eligible = coupon.filter ? items.filter(coupon.filter) : items;
  const base = eligible.reduce((s, i) => s + i.finalPrice * i.quantity, 0);

  const discount =
    coupon.type === "percent"
      ? base * (coupon.value / 100)
      : coupon.type === "fixed"
        ? Math.min(coupon.value, base)
        : 0;

  return { coupon, discount: Math.round(discount * 100) / 100 };
}

const SHIPPING_TIERS = [
  { minOrder: 0, cost: 19.99, label: "Kurier" },
  { minOrder: 200, cost: 9.99, label: "Kurier (rabat)" },
  { minOrder: 500, cost: 0, label: "Darmowa dostawa" },
];

function getShipping(orderValue) {
  const tier = [...SHIPPING_TIERS]
    .reverse()
    .find((t) => orderValue >= t.minOrder);

  const next = SHIPPING_TIERS.find((t) => t.minOrder > orderValue) ?? null;
  const missingForFree = next ? next.minOrder - orderValue : 0;

  return {
    ...tier,
    next,
    missingForFree: Math.round(missingForFree * 100) / 100,
  };
}
function applyItemDiscount(item) {
  const discount = item.price > 200 ? item.price * 0.1 : 0;
  return {
    ...item,
    discount,
    finalPrice: item.price - discount,
  };
}

function summarizeCart(rawCart, couponCode = null) {
  const items = rawCart.map(applyItemDiscount);

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemSavings = items.reduce((s, i) => s + i.discount * i.quantity, 0);
  const afterItems = subtotal - itemSavings;

  let couponSavings = 0;
  let couponInfo = null;
  if (couponCode) {
    const result = applyCoupon(couponCode, items);
    couponSavings = result.discount;
    couponInfo = result.coupon;
  }

  const afterCoupon = afterItems - couponSavings;
  const shipping = getShipping(afterCoupon);
  const total = afterCoupon + shipping.cost;
  const totalSaved = itemSavings + couponSavings;

  return {
    items,
    subtotal,
    itemSavings,
    afterItems,
    couponCode,
    couponInfo,
    couponSavings,
    afterCoupon,
    shipping,
    total,
    totalSaved,
  };
}

const summary = summarizeCart(cart, "TECH20");

console.log("--- Podsumowanie koszyka ---");
console.log(`Wartość przed rabatami: ${summary.subtotal} zł`);
console.log(`Rabaty na produkty:    -${summary.itemSavings} zł`);
console.log(
  `Kupon (${summary.couponCode}):          -${summary.couponSavings} zł`,
);
console.log(`Po rabatach:            ${summary.afterCoupon} zł`);
console.log(
  `Dostawa (${summary.shipping.label}):  ${summary.shipping.cost} zł`,
);
console.log(`Do zapłaty:             ${summary.total} zł`);
console.log(`Łączne oszczędności:    ${summary.totalSaved} zł`);

if (summary.shipping.missingForFree > 0) {
  console.log(
    `Brakuje ${summary.shipping.missingForFree} zł do: ${summary.shipping.next.label}`,
  );
}
