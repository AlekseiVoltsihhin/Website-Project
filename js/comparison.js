// Interactive
Ring
Comparison
document.addEventListener('DOMContentLoaded', function()
{
    const
slider = document.getElementById('comparisonSlider');
const
saturnView = document.getElementById('saturnView');
const
j1407bView = document.getElementById('j1407bView');

// Handle
slider
input
slider.addEventListener('input', function()
{
    const
value = this.value;

// Crossfade
between
Saturn and J1407b
views
if (value < 50)
{
// Show
Saturn
saturnView.classList.add('active');
j1407bView.classList.remove('active');
} else {
       // Show
J1407b
saturnView.classList.remove('active');
j1407bView.classList.add('active');
}
});

// Add
smooth
scroll
for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link = > {
link.addEventListener('click', function(e) {
// Only apply smooth scroll if linking to sections on the same page
if (this.getAttribute('href').startsWith('#')) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetSection = document.querySelector(targetId);

if (targetSection) {
targetSection.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
}
});
});

// Add
animation
on
scroll
for cards
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};

const
observer = new
IntersectionObserver(function(entries)
{
    entries.forEach(entry= > {
    if (entry.isIntersecting)
{
    entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);

// Observe
all
cards and sections
for scroll animations
const animatedElements = document.querySelectorAll('.planet-card, .difference-card, .stats-table, .ring-comparison');
animatedElements.forEach(el = > {
el.style.opacity = '0';
el.style.transform = 'translateY(30px)';
el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(el);
});
});