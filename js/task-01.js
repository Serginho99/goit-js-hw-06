const createCategories = document.querySelector("#categories");
const categoriesItem = [...createCategories.children];
console.log(categoriesItem);
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.map((elem) => {
  const categoriesTitle = elem.querySelector("h2");
  console.log(`Category: ${categoriesTitle.textContent}`);
  const categoryLength = elem.querySelectorAll("li");
  console.log(`Element: ${categoryLength.length}`);
});
