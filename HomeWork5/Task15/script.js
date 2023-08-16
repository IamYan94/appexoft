const pizza1 = {
  size: "середня",
  filling: "бекон та огірок",
  price: 150,
};
const pizza2 = {
  size: "велика",
  filling: "салямі та чотири сири",
  price: 200,
};

function mergeWithDefaults(obj, defaults) {
  const merged = {};
  for (var key in defaults) {
    merged[key] = obj.hasOwnProperty(key) ? obj[key] : defaults[key];
  }
  return merged;
}

const defaultPizza = {
  size: "стандартна",
  filling: "класична",
  price: 50,
};

const mergedPizza1 = mergeWithDefaults(pizza1, defaultPizza);
const mergedPizza2 = mergeWithDefaults(pizza2, defaultPizza);

console.log("Піца 1:", mergedPizza1);
console.log("Піца 2:", mergedPizza2);
console.log("Стандарт :", defaultPizza);
