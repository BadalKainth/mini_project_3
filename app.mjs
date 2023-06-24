import { food } from "./food.mjs";

function listAll() {
  return food;
}

function listWithCategories(category) {
  return food.filter((x) => x.category === category);
}

function listAllVegetables() {
  return listWithCategories("Vegetable");
}

function listAllFruits() {
  return listWithCategories("Fruit");
}

function listAllProteins() {
  return listWithCategories("Protein");
}
function listAllNuts() {
  return listWithCategories("Nuts");
}

function listAllGrains() {
  return listWithCategories("Grain");
}

function listAllDairy() {
  return listWithCategories("Dairy");
}

function above100Calories() {
  return food.filter((food) => food.calorie > 100);
}

function below100Calories() {
  return food.filter((food) => food.calorie < 100);
}

function listHighToLow() {
  return food.sort((a, b) => b.protiens - a.protiens);
}

function listLowToHigh() {
  return food.sort((a, b) => a.cab - b.cab);
}

// / /  Solutions / /
console.log(listAll());
// console.log(listAllVegetables());
// console.log(listAllFruits());
// console.log(listAllProteins());
// console.log(listAllNuts());
// console.log(listAllGrains());
// console.log(listAllDairy());
// console.log(above100Calories());
// console.log(below100Calories());
// console.log(listHighToLow());
// console.log(listLowToHigh());
