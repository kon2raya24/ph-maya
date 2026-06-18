export function formatMaya(number: string): string {
  const cleaned = number.replace(/[^0-9]/g, "");
  if (cleaned.startsWith("63")) return `+${cleaned}`;
  if (cleaned.startsWith("0")) return `+63${cleaned.slice(1)}`;
  return `+63${cleaned}`;
}

export function validateMaya(number: string): boolean {
  const cleaned = number.replace(/[^0-9]/g, "");
  return /^(\+63|63|0)?9\d{9}$/.test(cleaned);
}
