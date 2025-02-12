import { products } from './data.js';
import { renderProducts } from './render.js';
import { setupFilters } from './filters.js';
import { setupWishlist } from './wishlist.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  setupFilters(products);
  setupWishlist();
});