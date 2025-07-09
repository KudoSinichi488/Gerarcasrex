// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("eLearning Website is ready!");

  // Smooth scrolling for nav links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: Highlight active section in nav while scrolling
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const answers = {
    q1: "b",
    q2: "b"
  };

  let score = 0;
  for (let q in answers) {
    const userAnswer = document.querySelector(`input[name="${q}"]:checked`);
    if (userAnswer && userAnswer.value === answers[q]) {
      score++;
    }
  }

  document.getElementById("quizResult").innerText = `Your score: ${score}/2`;
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