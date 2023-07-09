<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
  <script>
    function validateLogin() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to another page or perform other actions
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  </script>
</head>
<body>
  <h1>Login</h1>
  
  <label for="username">Username:</label>
  <input type="text" id="username" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" required>
  
  <button onclick="validateLogin()">Login</button>
</body>
</html>
