window.addEventListener('DOMContentLoaded', () => {
  const playerEls = document.querySelectorAll('.player');

  playerEls.forEach((playerEl) => {
    const videoEl = playerEl.querySelector('video');
    const toggleBtnEl = playerEl.querySelector('button');

    toggleBtnEl.addEventListener('click', () => {
      videoEl.play();
      toggleBtnEl.classList.add('hidden');
    });

    videoEl.addEventListener('click', () => {
      videoEl.pause();
      toggleBtnEl.classList.remove('hidden');
    });
  });
});
