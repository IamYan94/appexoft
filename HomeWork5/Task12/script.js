const recipe = {
  назва: "Протеінові Оладки",
  інгредієнти: ["протеїн", "стевія", "молоко", "яйця"],
};

const recipeName = document.getElementById("recipe-name");
recipeName.textContent = recipe.назва;
const ingredientsList = document.getElementById("ingredients-list");

for (const key in recipe.інгредієнти) {
  const listItem = document.createElement("li");
  listItem.textContent = recipe.інгредієнти[key];
  ingredientsList.appendChild(listItem);
}
