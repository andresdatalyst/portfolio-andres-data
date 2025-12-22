// Mobile nav toggle and scroll animations
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
  const expanded = navLinks?.classList.contains("open");
  navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
});

// Close nav on link click (mobile)
navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("open");
  }
});

// Intersection Observer for fade-in sections
const fadeItems = document.querySelectorAll(".fade-item");
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
    threshold: 0.2,
  }
);

fadeItems.forEach((item) => observer.observe(item));

// Update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

