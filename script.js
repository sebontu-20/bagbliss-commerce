// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

// Add to Cart Functionality
let cart = [];
const products = [
  { id: 1, name: 'Elegant Handbag', price: 49.99 },
  { id: 2, name: 'Classic Backpack', price: 59.99 },
  { id: 3, name: 'Stylish Tote1', price: 39.99 },
  { id: 4, name: 'Stylish Tote2', price: 39.99 },
  { id: 5, name: 'Stylish Tote3', price: 39.99 },
  { id: 6, name: 'Stylish Tote4', price: 39.99 },
  { id: 7, name: 'Stylish Tote5', price: 39.99 },
  { id: 8, name: 'Stylish Tote6', price: 39.99 },
  { id: 9, name: 'Stylish Tote7', price: 39.99 }
];

const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartSection = document.getElementById('cart');
const cartIcon = document.getElementById('cart-icon');

// Add buttons to products
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
  const addButton = document.createElement('button');
  addButton.textContent = 'Add to Cart';
  addButton.className = 'add-to-cart';
  card.appendChild(addButton);

  addButton.addEventListener('click', () => {
    addToCart(products[index]);
  });
});

// Add to Cart Function
function addToCart(product) {
  cart.push(product);
  alert(`${product.name} has been added to your cart!`);
  updateCartUI();
}

// Update Cart UI
function updateCartUI() {
  // Update cart count
  cartCount.textContent = cart.length;

  // Update cart items list
  cartItems.innerHTML = '';
  let total = 0; // Reset total before recalculating

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)} 
      <button class="remove" data-index="${index}">Remove</button> `;
    cartItems.appendChild(li);

    // Add item price to total
    total += item.price;
  });

  // Update total price
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;

  // Add event listeners to remove buttons
  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index); // Get index of item to remove
      cart.splice(index, 1); // Remove item from cart array
      updateCartUI(); // Refresh cart UI
    });
  });
}

// Toggle Cart Section
cartIcon.addEventListener('click', () => {
  cartSection.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight link to current section
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav a.active')?.classList.remove('active');
    link.classList.add('active');
  });
});
