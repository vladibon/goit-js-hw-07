const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredientItem = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  return ingredientRef;
};

ingredientsRef.append(...ingredients.map(makeIngredientItem));
