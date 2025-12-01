// Interactive TRUE SCALE Ring Comparison
const scaleSlider = document.getElementById('scaleSlider');
const scaleReference = document.querySelector('.scale-reference');
const zoomLevelDisplay = document.getElementById('zoomLevel');

if (scaleSlider && scaleReference && zoomLevelDisplay) {
  scaleSlider.addEventListener('input', function () {
    const value = this.value;
    const scale = value / 100; // 0.1 (zoomed out) to 1.0 (zoomed in)
    scaleReference.style.transform = `scale(${scale})`;
    zoomLevelDisplay.textContent = `${scale.toFixed(1)}x`;
  });

  // Set initial zoom
  scaleReference.style.transform = 'scale(0.1)';
}

// Add smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections for scroll animations
const animatedElements = document.querySelectorAll(
  '.planet-card, .difference-card, .stats-table, .ring-comparison'
);
animatedElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
