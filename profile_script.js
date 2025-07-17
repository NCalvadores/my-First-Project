document.addEventListener("DOMContentLoaded", function () {
  // Redirect
  if (localStorage.getItem('loggedIn') !== 'true') {
    alert('You must be logged in to access your profile.');
    window.location.href = 'login.html';
    return; // prevent the rest of the script from running
  }

  // Fill in user info
  const userName = localStorage.getItem('userName') || 'Guest';
  const userEmail = localStorage.getItem('userEmail') || 'N/A';
  const memberSince = 'June 2025'; // Could be dynamic in the future

  document.getElementById('profile-name').textContent = userName;
  document.getElementById('profile-email').textContent = userEmail;
  document.getElementById('profile-date').textContent = memberSince;

  // Auth link toggle in navbar
  const loginLink = document.getElementById('auth-link');
  if (loginLink && localStorage.getItem('loggedIn') === 'true') {
    loginLink.textContent = 'Logout';
    loginLink.href = '#';
    loginLink.onclick = (e) => {
      e.preventDefault();
      localStorage.setItem('loggedIn', 'false');
      window.location.href = 'login.html';
    };
  }

  // Dark mode
  const darkToggle = document.getElementById('darkToggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const theme = body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }

  // Avatar upload 
  const avatarImg = document.getElementById("profileAvatar");
  const avatarUpload = document.getElementById("avatarUpload");

  if (avatarImg && avatarUpload) {
    const savedImage = localStorage.getItem("userAvatar");
    if (savedImage) {
      avatarImg.src = savedImage;
    }

    avatarUpload.addEventListener("change", function () {
      const file = this.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageData = e.target.result;
          avatarImg.src = imageData;
          localStorage.setItem("userAvatar", imageData);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file.");
      }
    });
  }
});
