// Smooth scroll for navigation links

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor tag behavior (jumping to top)
    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});
