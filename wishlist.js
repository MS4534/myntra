export function setupWishlist() {
  const wishlist = new Set();

  document.addEventListener('click', (e) => {
    if (e.target.closest('.wishlist-button')) {
      const button = e.target.closest('.wishlist-button');
      const productId = button.dataset.id;
      const icon = button.querySelector('i');

      if (wishlist.has(productId)) {
        wishlist.delete(productId);
        icon.classList.remove('fas');
        icon.classList.add('far');
      } else {
        wishlist.add(productId);
        icon.classList.remove('far');
        icon.classList.add('fas');
      }
    }
  });
}