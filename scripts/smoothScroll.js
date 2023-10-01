window.addEventListener('DOMContentLoaded', () => {
  const linkEls = document.querySelectorAll('.smoothScrollLink');

  linkEls.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
});
