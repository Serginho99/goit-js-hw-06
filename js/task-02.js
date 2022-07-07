const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
console.log(list);
const newArr = (array) => {
  return array.map((elem) => {
    const itemList = document.createElement("li");
    itemList.textContent = elem;
    console.log(itemList);
    itemList.classList.add("item");
    return itemList;
  });
};
const addIngridients = newArr(ingredients);
list.append(...addIngridients);
console.log(newArr);
