// Fail: comparison.js
// Kontekst: võrdluslehe interaktiivsed elemendid (rõngaste skaala, navigeerimine, animatsioonid)
// Autor: Aleksei Voltšihhin (projektimeeskond)
// Eesmärk: tutvustada J1407b ja Saturni rõngaste suurusvahet, lisades kasutajale nähtav suumimine ja kerimisega käivituva animatsiooni.
// Viited: MDN <input type="range"> sündmused ja stiilid (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range),
//         MDN Element.scrollIntoView sujuv kerimine (https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView),
//         MDN IntersectionObserver API (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API),
//         CSS-Tricksi juhend IntersectionObserveri kasutamiseks visuaalsete efektide lisamisel (https://css-tricks.com/intersection-observer-api/)
const scaleSlider = document.getElementById('scaleSlider');
const scaleReference = document.querySelector('.scale-reference');
const zoomLevelDisplay = document.getElementById('zoomLevel');

if (scaleSlider && scaleReference && zoomLevelDisplay) {
  scaleSlider.addEventListener('input', function () {
    const value = this.value;
    const scale = value / 100; // 0.1 (välja suumitud) kuni 1.0 (täisvaade)
    scaleReference.style.transform = `scale(${scale})`;
    zoomLevelDisplay.textContent = `${scale.toFixed(1)}x`;
  });

  // Määra algne suumitase
  scaleReference.style.transform = 'scale(0.1)';
}

// Lisa sujuv kerimine navigeerimislinkidele
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

// Lisa kerimisel nähtavad animatsioonid kaartidele
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

// Vaatle kõiki kaarte ja sektsioone, et animatsioon käivituks kerimisel
const animatedElements = document.querySelectorAll(
  '.planet-card, .difference-card, .stats-table, .ring-comparison'
);
animatedElements.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
