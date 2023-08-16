let prod1 = {
  name: "Whey Gold Nutrition",
  price: 2000,
  category: "Sport Pit",
};
let prod2 = {
  name: "BCAA",
  price: 1000,
  category: "Sport Pit",
};
let combined = {
  product1: prod1,
  product2: prod2,
};
document.getElementById("result").innerHTML = JSON.stringify(combined, null, 2);
