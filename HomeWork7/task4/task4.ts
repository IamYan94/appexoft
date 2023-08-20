interface Order {
  productName: string;
  quantity: number;
  unitPrice: number;
}
function validateOrder(order: Order): boolean {
  return order.quantity > 0 && order.unitPrice > 0;
}
const valid: Order = {
  productName: "Печево",
  quantity: 5,
  unitPrice: 500,
};

const notValid: Order = {
  productName: "Чіпси",
  quantity: 0,
  unitPrice: 8.5,
};
console.log(validateOrder(valid));
console.log(validateOrder(notValid));
