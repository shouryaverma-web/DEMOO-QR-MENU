// Urban Bites Cafe Configuration
const CAFE_CONFIG = {
  name: "Urban Bites Cafe",
  tagline: "Modern Casual Dining",
  phone: "918882648225", // WhatsApp number without + or spaces
  address: "Connaught Place, New Delhi, India",
  hours: "Monday to Sunday, 11:00 AM – 11:00 PM"
};

// Food Menu Data Array
const MENU_ITEMS = [
  // 1. Burgers
  {
    id: 1,
    name: "Classic Veg Burger",
    category: "Burgers",
    price: 129,
    description: "Crispy veg patty served with fresh lettuce, tomatoes, and house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 169,
    description: "Golden crispy fried chicken patty topped with melted cheese and spicy mayo.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 3,
    name: "Double Cheese Burger",
    category: "Burgers",
    price: 199,
    description: "Loaded double patty with extra cheddar cheese slice, caramelized onions, and pickles.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
    available: true
  },

  // 2. Pizza
  {
    id: 4,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 199,
    description: "Classic mozzarella cheese, fresh basil leaves, and rich tomato sauce crust.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 5,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 249,
    description: "Loaded with onion, capsicum, fresh mushrooms, and sweet corn toppings.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 6,
    name: "Tandoori Paneer Pizza",
    category: "Pizza",
    price: 269,
    description: "Spicy tandoori paneer cubes, red paprika, and coriander topping on cheesy base.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
    available: true
  },

  // 3. Pasta
  {
    id: 7,
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 179,
    description: "Penne pasta cooked in creamy Alfredo sauce with garlic, herbs, and veggies.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281293?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 8,
    name: "Red Sauce Pasta",
    category: "Pasta",
    price: 169,
    description: "Tangy Arrabbiata tomato sauce pasta with chilli flakes and parmesan cheese.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",
    available: true
  },

  // 4. Snacks
  {
    id: 9,
    name: "French Fries",
    category: "Snacks",
    price: 89,
    description: "Crispy salted potato fries served with classic tomato ketchup.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 10,
    name: "Peri Peri Fries",
    category: "Snacks",
    price: 109,
    description: "Crispy fries tossed in spicy peri peri seasoning powder.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 11,
    name: "Garlic Bread",
    category: "Snacks",
    price: 119,
    description: "Toasted baguette slices topped with melted garlic butter and herbs.",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=500&q=80",
    available: true
  },

  // 5. Beverages
  {
    id: 12,
    name: "Cold Coffee",
    category: "Beverages",
    price: 99,
    description: "Rich blended iced coffee topped with chocolate syrup drizzle.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 13,
    name: "Fresh Lime Soda",
    category: "Beverages",
    price: 69,
    description: "Refreshing lemon soda served sweet, salted, or mixed.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",
    available: true
  },
  {
    id: 14,
    name: "Chocolate Shake",
    category: "Beverages",
    price: 129,
    description: "Thick creamy dark chocolate milkshake topped with chocolate chips.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
    available: true
  }
];