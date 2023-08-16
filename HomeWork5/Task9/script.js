const vag = {
  name: "Audi",
  model: "A4",
  age: 2011,
};

const { name, model, age } = vag;
const ageNew = 2020;
const audiNew = { name, model, age: ageNew };

const carInfoElement = document.getElementById("infoCar");

const onDanniHTML = `
    <p>Марка: ${audiNew.name}</p>
    <p>Модель: ${audiNew.model}</p>
    <p>Рік: ${audiNew.age}</p>
`;

carInfoElement.innerHTML = onDanniHTML;
