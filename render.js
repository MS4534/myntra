export function renderProducts(products) {
  const container = document.getElementById('productsContainer');
  
  container.innerHTML = products.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <svg viewBox="0 0 200 266" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="266" fill="${product.color}"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24">
            ${product.brand}
          </text>
        </svg>
        <button class="wishlist-button" data-id="${product.id}">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="brand">${product.brand}</div>
        <div class="name">${product.name}</div>
        <div class="price">
          <span class="current-price">₹${product.currentPrice}</span>
          <span class="original-price">₹${product.originalPrice}</span>
          <span class="discount">${product.discount}% OFF</span>
        </div>
      </div>
    </div>
  `).join('');
}