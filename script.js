const header = document.querySelector(".header");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function handleHeader() {
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

handleHeader();
window.addEventListener("scroll", handleHeader, { passive: true });

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
    root: null,
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.08,
  }
);

revealItems.forEach((item) => observer.observe(item));

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".case-study-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const article = btn.closest(".case-study");
    if (!article) return;
    const open = article.classList.toggle("case-study--open");
    const details = article.querySelector(".case-study-details");
    const label = btn.querySelector(".case-study-toggle-text");
    btn.setAttribute("aria-expanded", String(open));
    if (details) details.setAttribute("aria-hidden", open ? "false" : "true");
    if (label) label.textContent = open ? "Hide details ↑" : "View details ↓";
  });
});
