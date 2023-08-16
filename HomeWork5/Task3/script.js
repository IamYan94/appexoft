function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "division by zero is not possible";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "unsupported operation";
  }

  document.getElementById("result").textContent = "Result: " + result;
}
