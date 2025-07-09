// Enable dragging for horizontal scroll
const slider = document.querySelector('.slides');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; // Drag speed
  slider.scrollLeft = scrollLeft - walk;
});

// Optional: mobile touch support
let touchStartX = 0;
slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].clientX;
  const walk = (touchStartX - x) * 1.5;
  slider.scrollLeft = scrollLeft + walk;
});