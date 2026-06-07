export const WHATSAPP_NUMBER = "27738845264"; // international format, no +

export function waLink(message = "Hi! I'd like to place an order.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
