const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector("ul#ingredients");

const listOfLiIngredient = ingredients.map((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.classList.add("item");
  liIngredient.textContent = ingredient;
  return liIngredient;
});

const markUp = listOfLiIngredient.reduce(
  (acc, ingredient) => acc + `<li class=item>${ingredient.textContent}</li>`,
  ""
);
ulIngredients.insertAdjacentHTML("beforeend", markUp);
//listOfLiIngredient.map((ingredient) => ulIngredients.append(ingredient));
