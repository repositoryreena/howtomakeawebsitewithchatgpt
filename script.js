// Fade + bounce in each section one-by-one
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.1,
};

let delay = 0;

const revealSection = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('appear');
      }, delay);
      delay += 300; // stagger each section by 300ms
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealSection, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

const text = "I Built This Website With ChatGPT";
const speed = 100;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typewriter-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);
