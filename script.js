// Minimal JS for contact form feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thank you for reaching out! We will get back to you soon.";
  this.reset();
});
// Fashion Navbar: Scroll, load, and mobile menu logic
(function () {
  const navbar = document.getElementById("fashionNavbar");
  const hamburger = document.getElementById("navbarHamburger");
  const links = document.getElementById("navbarLinks");
  const mobileBg = document.getElementById("navbarMobileBg");
  // Scroll effect
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll);
  // Fade/slide in on load
  window.addEventListener("DOMContentLoaded", function () {
    navbar.style.opacity = 0;
    navbar.style.transform = "translateY(-24px)";
    setTimeout(() => {
      navbar.style.transition =
        "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)";
      navbar.style.opacity = 1;
      navbar.style.transform = "translateY(0)";
    }, 180);
  });
  // Hamburger menu logic
  if (hamburger && links && mobileBg) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      links.classList.toggle("open");
      mobileBg.classList.toggle("open");
    });
    mobileBg.addEventListener("click", function () {
      hamburger.classList.remove("active");
      links.classList.remove("open");
      mobileBg.classList.remove("open");
    });
    // Close menu on nav link click (mobile)
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        links.classList.remove("open");
        mobileBg.classList.remove("open");
      });
    });
  }
})();
