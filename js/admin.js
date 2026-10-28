// Hardcoded Demo Credentials for Practice
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('admin-login-form');
  const loginSection = document.getElementById('login-section');
  const dashboardSection = document.getElementById('dashboard-section');
  const btnLogout = document.getElementById('btn-logout');
  const addItemForm = document.getElementById('add-item-form');

  // Check Session
  if (sessionStorage.getItem('isAdminLoggedIn') === 'true') {
    showDashboard();
  }

  // Handle Login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('admin-username').value.trim();
    const pass = document.getElementById('admin-password').value.trim();

    if (user === ADMIN_CREDENTIALS.username && pass === ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      showDashboard();
    } else {
      alert('Invalid Credentials! Try: admin / admin123');
    }
  });

  // Handle Logout
  btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    loginSection.style.display = 'block';
    dashboardSection.style.display = 'none';
  });

  // Show Dashboard & Load Menu
  function showDashboard() {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    renderAdminTable();
  }

  // Render Table Rows
  function renderAdminTable() {
    const tableBody = document.getElementById('admin-menu-table');
    tableBody.innerHTML = '';

    MENU_ITEMS.forEach((item, index) => {
      const row = document.createElement('tr');
      row.style.borderBottom = '1px solid var(--border-light)';
      row.innerHTML = `
        <td style="padding: 10px; font-weight: 600;">${item.name}</td>
        <td style="padding: 10px;">${item.category}</td>
        <td style="padding: 10px;">₹${item.price}</td>
        <td style="padding: 10px;">
          <button onclick="deleteMenuItem(${index})" style="background: #ff4d4d; color: #fff; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-weight: 600;">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Add New Item
  addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: document.getElementById('item-name').value.trim(),
      category: document.getElementById('item-category').value,
      price: parseFloat(document.getElementById('item-price').value),
      image: document.getElementById('item-image').value.trim(),
      description: document.getElementById('item-desc').value.trim(),
      available: true
    };

    MENU_ITEMS.push(newItem);
    renderAdminTable();
    addItemForm.reset();
    alert('New Menu Item added successfully!');
  });

  // Attach delete function globally
  window.deleteMenuItem = function(index) {
    if (confirm(`Are you sure you want to delete "${MENU_ITEMS[index].name}"?`)) {
      MENU_ITEMS.splice(index, 1);
      renderAdminTable();
    }
  };
});