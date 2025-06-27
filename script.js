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

// Sticky Navbar Scroll Behavior
// (function () {
//   const navbar = document.getElementById("vStickyNavbar");
//   function onScroll() {
//     if (window.scrollY > 0) {
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   }
//   window.addEventListener("scroll", onScroll);
//   window.addEventListener("DOMContentLoaded", onScroll);
// })();

// // Hamburger Menu Toggle
// (function () {
//   const hamburger = document.getElementById("vNavbarHamburger");
//   const mobileMenu = document.getElementById("vNavbarMobileMenu");
//   if (!hamburger || !mobileMenu) return;
//   hamburger.addEventListener("click", function () {
//     mobileMenu.classList.toggle("open");
//   });
//   // Close menu on link click (optional)
//   mobileMenu.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//       mobileMenu.classList.remove("open");
//     });
//   });
// })();

// // Premium Hero Center Image Parallax Effect (Rewritten)
// (function () {
//   const hero = document.querySelector(".premium-hero");
//   const centerImg = document.querySelector(".premium-hero-center-image img");
//   if (!hero || !centerImg) return;

//   let targetX = 0,
//     targetY = 0;
//   let currentX = 0,
//     currentY = 0;
//   let animationFrameId = null;
//   const maxMove = 30; // px
//   const ease = 0.12;

//   function animate() {
//     currentX += (targetX - currentX) * ease;
//     currentY += (targetY - currentY) * ease;
//     centerImg.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
//     animationFrameId = requestAnimationFrame(animate);
//   }

//   function onMouseMove(e) {
//     const rect = hero.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     // Center relative
//     const relX = x - rect.width / 2;
//     const relY = y - rect.height / 2;
//     // Bound the movement
//     targetX = Math.max(-maxMove, Math.min(maxMove, relX * 0.18));
//     targetY = Math.max(-maxMove, Math.min(maxMove, relY * 0.18));
//   }

//   function onMouseLeave() {
//     targetX = 0;
//     targetY = 0;
//   }

//   hero.addEventListener("mousemove", onMouseMove);
//   hero.addEventListener("mouseleave", onMouseLeave);

//   animate();
// })();
const container = document.querySelector(".premium-hero");
const image = document.querySelector(".premium-hero-center-image img");

// Parallax effect intensity
const intensity = 30;

container.addEventListener("mousemove", (e) => {
  // Calculate mouse position relative to container center
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Calculate normalized position (-1 to 1)
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const moveX = (x - centerX) / centerX;
  const moveY = (y - centerY) / centerY;

  // Apply movement with intensity
  const translateX = moveX * intensity;
  const translateY = moveY * intensity;

  image.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

container.addEventListener("mouseleave", () => {
  // Reset position when mouse leaves container
  image.style.transform = "translate(0, 0)";
});
