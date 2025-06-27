// // Minimal JS for contact form feedback
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   document.getElementById("formMessage").textContent =
//     "Thank you for reaching out! We will get back to you soon.";
//   this.reset();
// });
// // Fashion Navbar: Scroll, load, and mobile menu logic
// (function () {
//   const navbar = document.getElementById("fashionNavbar");
//   const hamburger = document.getElementById("navbarHamburger");
//   const links = document.getElementById("navbarLinks");
//   const mobileBg = document.getElementById("navbarMobileBg");
//   // Scroll effect
//   function onScroll() {
//     if (window.scrollY > 40) {
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   }
//   window.addEventListener("scroll", onScroll);
//   // Fade/slide in on load
//   window.addEventListener("DOMContentLoaded", function () {
//     navbar.style.opacity = 0;
//     navbar.style.transform = "translateY(-24px)";
//     setTimeout(() => {
//       navbar.style.transition =
//         "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)";
//       navbar.style.opacity = 1;
//       navbar.style.transform = "translateY(0)";
//     }, 180);
//   });
//   // Hamburger menu logic
//   if (hamburger && links && mobileBg) {
//     hamburger.addEventListener("click", function () {
//       hamburger.classList.toggle("active");
//       links.classList.toggle("open");
//       mobileBg.classList.toggle("open");
//     });
//     mobileBg.addEventListener("click", function () {
//       hamburger.classList.remove("active");
//       links.classList.remove("open");
//       mobileBg.classList.remove("open");
//     });
//     // Close menu on nav link click (mobile)
//     links.querySelectorAll("a").forEach((link) => {
//       link.addEventListener("click", function () {
//         hamburger.classList.remove("active");
//         links.classList.remove("open");
//         mobileBg.classList.remove("open");
//       });
//     });
//   }
// })();
const img = document.querySelector(".parallax-image");
const maxMove = 80;

document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const offsetX = ((e.clientX - centerX) / centerX) * maxMove;
  const offsetY = ((e.clientY - centerY) / centerY) * maxMove;

  img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.07)`;
});

document.addEventListener("mouseleave", () => {
  img.style.transform = `translate(0px, 0px) scale(1)`;
});

// Cursor Logic
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
  "#0c4833",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
