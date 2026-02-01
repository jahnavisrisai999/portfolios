// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.textContent.toLowerCase().replace(" ", "");
    const target = document.querySelector("#" + targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
});
