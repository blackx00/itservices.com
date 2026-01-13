const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const menuOverlay = document.getElementById("menuOverlay");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");

/* MENU TOGGLE */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.style.overflow =
    navLinks.classList.contains("active") ? "hidden" : "auto";
});

/* CLOSE MENU WHEN CLICKING ON OVERLAY */
menuOverlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuToggle.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close menu when clicking on a link
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

/* SCROLL NAVBAR */
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ACTIVE LINK - Highlight current page */
function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  links.forEach(a => {
    a.classList.remove("active");
    const linkHref = a.getAttribute("href");
    const linkPage = linkHref.split('/').pop();
    
    // Check if current page matches link
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (currentPage === 'index.html' && linkPage === 'index.html')) {
      a.classList.add("active");
    }
  });
}

// Set active link on page load
setActiveLink();

/* Set navbar background for pages without hero section */
if (!document.querySelector('.hero')) {
  navbar.classList.add('has-bg');
}


// Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
