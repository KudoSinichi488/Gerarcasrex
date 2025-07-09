document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  window.showSignUp = function () {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  };

  window.showLogin = function () {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  };
});function loginWithFacebook() {
  alert("Logging in with Facebook... (Demo Only)");
}