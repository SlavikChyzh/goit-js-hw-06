const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
for (let category of categories) {
  // const categoryName = category.querySelector("h2");
  // console.log(`Category: ${categoryName.textContent}`);
  // const elementInCategory = category.querySelectorAll("li");
  // console.log(`Elements: ${elementInCategory.length}`);

  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
}
