type stringNumber = string | number;
function stringNumber(data: stringNumber): void {
  if (typeof data === "string") {
    console.log(`Рядок: ${data}`);
  } else if (typeof data === "number") {
    console.log(`Число: ${data}`);
  } else {
    console.log(`Невідомий тип: ${data}`);
  }
}
stringNumber("Hello, Rostyk");
stringNumber(167);
