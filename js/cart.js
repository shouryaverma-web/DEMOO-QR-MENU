// Cart State Array
let cart = [];

// Add Item to Cart
function addToCart(itemId) {
  const menuItem = MENU_ITEMS.find(item => item.id === itemId);
  if (!menuItem) return;

  const existingCartItem = cart.find(item => item.id === itemId);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    cart.push({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      quantity: 1
    });
  }

  updateCartUI();
}

// Update Quantity (+ / -)
function updateQuantity(itemId, change) {
  const cartItemIndex = cart.findIndex(item => item.id === itemId);
  if (cartItemIndex === -1) return;

  cart[cartItemIndex].quantity += change;

  if (cart[cartItemIndex].quantity <= 0) {
    cart.splice(cartItemIndex, 1);
  }

  updateCartUI();
}

// Update UI & WhatsApp Message Link
function updateCartUI() {
  const cartItemsList = document.getElementById('cart-items-list');
  const cartCountBadge = document.getElementById('cart-count');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const btnWhatsApp = document.getElementById('btn-whatsapp-order');

  const mobileCartCount = document.getElementById('mobile-cart-count');
  const mobileCartTotal = document.getElementById('mobile-cart-total');

  // Calculate Total Quantity & Total Price
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update Badges & Totals
  cartCountBadge.innerText = `${totalItemsCount} items`;
  cartTotalPrice.innerText = `₹${totalPrice}`;
  mobileCartCount.innerText = `${totalItemsCount} Items`;
  mobileCartTotal.innerText = `₹${totalPrice}`;

  // If Cart is Empty
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<p class="empty-cart-msg">Your cart is empty. Add items from menu to place order!</p>';
    btnWhatsApp.disabled = true;
    return;
  }

  // Render Items in Cart
  btnWhatsApp.disabled = false;
  cartItemsList.innerHTML = '';

  cart.forEach(item => {
    const itemSubtotal = item.price * item.quantity;
    const itemRowHtml = `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>₹${item.price} × ${item.quantity} = ₹${itemSubtotal}</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span><strong>${item.quantity}</strong></span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
    cartItemsList.innerHTML += itemRowHtml;
  });

  // Setup WhatsApp Click Event
  btnWhatsApp.onclick = sendWhatsAppOrder;
}

// Format and Open WhatsApp Order
function sendWhatsAppOrder() {
  if (cart.length === 0) return;

  let message = `🍽️ *NEW ORDER - ${CAFE_CONFIG.name}*\n`;
  message += `📍 Location: ${CAFE_CONFIG.address}\n`;
  message += `------------------------------------\n`;

  let grandTotal = 0;
  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    grandTotal += subtotal;
    message += `${index + 1}. *${item.name}* x ${item.quantity} = ₹${subtotal}\n`;
  });

  message += `------------------------------------\n`;
  message += `💰 *Total Amount: ₹${grandTotal}*\n\n`;
  message += `Please confirm and prepare my order!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CAFE_CONFIG.phone}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}