// Typing Effect
const roles = ["Web Developer", "Programmer", "Problem Solver"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = roles[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      current.substring(0, j++);
  } else {
    document.getElementById("typing").textContent =
      current.substring(0, j--);
  }

  if (j === current.length) isDeleting = true;
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Smooth Scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});