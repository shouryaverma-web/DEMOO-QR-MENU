// Render Menu Items on Screen
function renderMenuItems(itemsToRender) {
  const menuGrid = document.getElementById('menu-grid');
  menuGrid.innerHTML = '';

  if (itemsToRender.length === 0) {
    menuGrid.innerHTML = '<p class="empty-cart-msg">No food items available in this category.</p>';
    return;
  }

  itemsToRender.forEach(item => {
    const cardHtml = `
      <div class="food-card">
        <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy">
        <div class="food-info">
          <h4 class="food-title">${item.name}</h4>
          <p class="food-desc">${item.description}</p>
          <div class="food-bottom">
            <span class="food-price">₹${item.price}</span>
            <button class="btn-add-cart" onclick="addToCart(${item.id})">+ Add</button>
          </div>
        </div>
      </div>
    `;
    menuGrid.innerHTML += cardHtml;
  });
}

// Category Filter Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initial Display: Show All Items
  renderMenuItems(MENU_ITEMS);

  const categoryButtons = document.querySelectorAll('.cat-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');
      const titleElement = document.getElementById('current-category-title');

      if (selectedCategory === 'all') {
        titleElement.innerText = 'Full Menu';
        renderMenuItems(MENU_ITEMS);
      } else {
        titleElement.innerText = selectedCategory;
        const filteredItems = MENU_ITEMS.filter(item => item.category === selectedCategory);
        renderMenuItems(filteredItems);
      }
    });
  });
});