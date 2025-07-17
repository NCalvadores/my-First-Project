// Toggle Login/Logout
const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
const loginLink = document.getElementById('auth-link');
if (isLoggedIn && loginLink) {
  loginLink.textContent = 'Logout';
  loginLink.href = '#';
  loginLink.onclick = () => {
    localStorage.setItem('loggedIn', 'false');
    window.location.href = 'login.html';
  };
}

// Personalized Greeting
const userName = localStorage.getItem('userName');
if (isLoggedIn && userName) {
  const greeting = document.createElement('p');
  greeting.id = 'greeting';
  greeting.textContent = `Welcome back, ${userName}!`;
  const heroSection = document.querySelector('.hero .container');
  if (heroSection) {
    heroSection.appendChild(greeting);
  }
}

// Add to Cart
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} has been added to your cart.`);
}

// Category Filter
const filter = document.getElementById('categoryFilter');
if (filter) {
  filter.addEventListener('change', () => {
    const category = filter.value;
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      const match = category === 'all' || product.dataset.category === category;
      product.style.display = match ? 'block' : 'none';
    });
  });
}

// Dark Modes
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
}

