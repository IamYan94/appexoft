const order = {
  номер: 1000,
  товари: ["protein", "bcaa", "creatine"],
  адреса: "пр.Свободи",
};

const { адреса, ...restOfOrder } = order;

const resultElement = document.getElementById("result");

resultElement.textContent = JSON.stringify(restOfOrder);
