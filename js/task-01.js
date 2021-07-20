const categoriesRefs = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesRefs.length} категории.`);

categoriesRefs.forEach(categoryRef => {
  console.log(`Категория: ${categoryRef.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${categoryRef.lastElementChild.childElementCount}`);
});
