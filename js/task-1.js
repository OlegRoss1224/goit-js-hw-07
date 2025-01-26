const numberOfCategories = document.getElementById('categories');

const items = numberOfCategories.querySelectorAll('.item');

console.log(`Number of categories : ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryItems = item.querySelectorAll('ul li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
