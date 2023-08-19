// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-box input[type='button']");
    loginButton.addEventListener("click", handleLogin);
  });
  
  function handleLogin() {
    const emailInput = document.querySelector(".login-box input[type='email']");
    const passwordInput = document.querySelector(".login-box input[type='password']");
    
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(u => u.email === emailInput.value && u.password === passwordInput.value);
    
    if (user) {
      alert("Login successful!");
      // You can redirect to the dashboard or perform other actions here
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  
  
  
  
  