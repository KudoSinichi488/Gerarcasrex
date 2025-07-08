// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Learn More Button Alert
  const learnMoreBtn = document.querySelector(".btn");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Welcome! More features coming soon.");
    });
  }

  // (Optional) Toggle Navigation for mobile (future use)
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.body.innerHTML = html;
    })
    .catch(err => {
      alert("Failed to load page: " + err);
    });
}