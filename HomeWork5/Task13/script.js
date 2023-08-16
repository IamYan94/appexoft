const people1 = {
  name: "Roman",
  age: 19,
  occupation: "Developer",
};

const people2 = {
  name: "Messi",
  age: 36,
  occupation: "Sportsman",
};

const areEqual = JSON.stringify(people1) === JSON.stringify(people2);

const resultElement = document.getElementById("result");

if (areEqual) {
  resultElement.innerHTML = "Обєкти одинакові";
} else {
  resultElement.innerHTML = "Обєкти різні.";
}
