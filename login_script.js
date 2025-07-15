const form = document.getElementById('login-form');
const statusMsg = document.getElementById('login-status');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

// Load remembered email
const savedEmail = localStorage.getItem('userEmail');
if (savedEmail) {
  form.email.value = savedEmail;
  document.getElementById('rememberMe').checked = true;
}

// Toggle show/hide password
togglePassword.addEventListener('click', function () {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  this.textContent = type === 'password' ? 'See Password' : 'Hide Password';
});

// Handle login form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  if (email === 'admin@example.com' && password === 'admin') {
    statusMsg.textContent = 'Login successful!';
    statusMsg.style.color = 'green';
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userName', name);

    if (document.getElementById('rememberMe').checked) {
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('userEmail');
    }

    setTimeout(() => {
      window.location.href = 'main_page.html';
    }, 1000);
  } else {
    statusMsg.textContent = 'Invalid credentials. Try again.';
    statusMsg.style.color = 'red';
    localStorage.setItem('loggedIn', 'false');
  }
});


// ===============================
// Dark mode
// ===============================
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

// Toggle dark mode
darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
