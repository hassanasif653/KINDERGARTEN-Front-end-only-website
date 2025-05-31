// Login/Logout functionality
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('.login-form input[type="email"]').value;
    const password = document.querySelector('.login-form input[type="password"]').value;
  
    // Simple validation
    if (email && password) {
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful!');
      window.location.reload();
    } else {
      alert('Please fill in all fields');
    }
  });
  
  // Check login status
  function checkLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const loginBtn = document.querySelector('#login-btn');
    
    if (isLoggedIn) {
      loginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
      loginBtn.onclick = () => {
        localStorage.removeItem('loggedIn');
        window.location.reload();
      };
    } else {
      loginBtn.innerHTML = '<div class="fas fa-user"></div>';
      loginBtn.onclick = () => {
        document.querySelector('.login-form').classList.toggle('active');
      };
    }
  }
  
  // Registration form toggle
  document.querySelector('.toggle-form')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login-form').classList.remove('active');
    document.querySelector('.register-form').classList.add('active');
  });
  
  // Handle registration form
  document.querySelector('#registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted!'); // Replace with actual registration logic
    document.querySelector('.register-form').classList.remove('active');
  });
  
  // Initial check when page loads
  window.addEventListener('load', function() {
    checkLogin();
    
    // Existing loader code
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  
    // Dark mode toggle
    document.querySelector('.toggle-ball').addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  });