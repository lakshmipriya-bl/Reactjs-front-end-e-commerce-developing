// USD → INR conversion
// 1 USD ≈ ₹84 (approximate fixed rate for display purposes)
export const USD_TO_INR = 84;

/**
 * Convert a USD price to INR and format it with the ₹ symbol.
 * e.g. formatINR(19.99)  →  "₹1,679"
 *      formatINR(1299)   →  "₹1,09,116"
 */
export function formatINR(usdPrice) {
  const inr = Math.round(usdPrice * USD_TO_INR);
  return '₹' + inr.toLocaleString('en-IN');
}
