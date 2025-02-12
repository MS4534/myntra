import { renderProducts } from './render.js';

export function setupFilters(products) {
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');

  function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    let filteredProducts = [...products];

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }

    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-').map(Number);
      filteredProducts = filteredProducts.filter(p => {
        if (max) {
          return p.currentPrice >= min && p.currentPrice <= max;
        } else {
          return p.currentPrice >= min;
        }
      });
    }

    renderProducts(filteredProducts);
  }

  categoryFilter.addEventListener('change', filterProducts);
  priceFilter.addEventListener('change', filterProducts);
}