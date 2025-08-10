const roles = ["BSCS Student", "Creative Thinker", "Tech Enthusiast"];
let i = 0, j = 0, isDeleting = false, currentText = '', charIndex = 0;

function typeEffect() {
  const typed = document.getElementById('typed');
  const fullText = roles[i];

  if (!isDeleting && charIndex <= fullText.length) {
    currentText = fullText.substring(0, charIndex++);
    typed.innerText = currentText;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex >= 0) {
    currentText = fullText.substring(0, charIndex--);
    typed.innerText = currentText;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Animate Progress Circles
document.querySelectorAll('.progress-circle').forEach(circle => {
  const percent = circle.dataset.percent;
  const color = circle.dataset.color;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  circle.innerHTML = `
    <svg width="120" height="120">
      <circle cx="60" cy="60" r="${radius}" stroke="#eee" stroke-width="10" fill="none" />
      <circle cx="60" cy="60" r="${radius}" stroke="${color}" stroke-width="10" fill="none"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${circumference}" />
    </svg>
    <span>${percent}%</span>
  `;

  const strokeCircle = circle.querySelectorAll('circle')[1];
  setTimeout(() => {
    strokeCircle.style.transition = 'stroke-dashoffset 1.5s ease';
    strokeCircle.style.strokeDashoffset = offset;
  }, 300);
});

  AOS.init({
    duration: 1000,
    once: true
  });
 