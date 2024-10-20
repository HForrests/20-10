document.addEventListener('DOMContentLoaded', (event) => {
  const letters = document.querySelectorAll('.main-text .letter');
  letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
  });
});

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
