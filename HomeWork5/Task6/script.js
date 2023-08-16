function checkNumber(number) {
  if (number > 0) {
    return "A positive number.";
  } else if (number < 0) {
    return "A negative number.";
  } else {
    return "Number is zero.";
  }
}

console.log(checkNumber(455));
console.log(checkNumber(-13));
console.log(checkNumber(0));
