const header = document.querySelector(".header");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function handleHeader() {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

handleHeader();
window.addEventListener("scroll", handleHeader);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  }
);


revealItems.forEach((item) => observer.observe(item));

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});