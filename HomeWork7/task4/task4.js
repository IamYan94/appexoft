function validateOrder(order) {
    return order.quantity > 0 && order.unitPrice > 0;
}
var valid = {
    productName: "Печево",
    quantity: 5,
    unitPrice: 500,
};
var notValid = {
    productName: "Чіпси",
    quantity: 0,
    unitPrice: 8.5,
};
console.log(validateOrder(valid));
console.log(validateOrder(notValid));
