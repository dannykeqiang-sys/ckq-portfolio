const revealItems = document.querySelectorAll('.reveal');

const reveal = () => revealItems.forEach((item) => {
  if (item.getBoundingClientRect().top < window.innerHeight * 0.92) item.classList.add('is-visible');
});

reveal();
window.addEventListener('scroll', reveal, { passive: true });
