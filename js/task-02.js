const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredientItem = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  return ingredientRef;
};

const elements = ingredients.map(makeIngredientItem);
ingredientsRef.append(...elements);
