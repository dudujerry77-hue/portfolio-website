
// close menu on nav link click
$$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ── active nav link on scroll ──
const sections = $$$("section[id], address[id]");
const links    = $$$(".nav-link");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove("active"));
      const active = $$$(`.nav-link[href="#${entry.target.id}"]`);
      active.forEach(l => l.classList.add("active"));
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => observer.observe(s));

// ── scroll reveal ──
const revealEls = $$$(".card, .tl-item, .journey-item, .contact-card");

revealEls.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger by index
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, (i % 6) * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

// ── navbar shadow on scroll ──
const navbar = $("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 24px rgba(0,0,0,.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
}, { passive: true });
