// auth.js

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful login
      const user = userCredential.user;
      console.log("Login successful:", user.email);
      window.location.href = "welcome.html"; // redirect after login
    })
    .catch((error) => {
      document.getElementById("error-msg").textContent = error.message;
      console.error("Login error:", error.message);
    });
});
