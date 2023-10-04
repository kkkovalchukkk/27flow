window.addEventListener('DOMContentLoaded', () => {
  const subMenuEls = document.querySelectorAll('.submenuToggle');

  subMenuEls.forEach((submenuItem) => {
    const submenuEl = submenuItem.querySelector('.submenu');

    submenuItem.addEventListener('mouseover', () => {
      submenuItem.classList.add('active');
      submenuEl.classList.add('active');
      submenuEl.style.maxHeight = submenuEl.scrollHeight + 100 + 'px';
    });

    submenuItem.addEventListener('mouseout', () => {
      submenuItem.classList.remove('active');
      submenuEl.classList.remove('active');
      submenuEl.style.maxHeight = 0 + 'px';
    });

    submenuItem.addEventListener('click', (e) => {
      if (submenuItem.classList.contains('active')) {
        submenuItem.classList.remove('active');
        submenuEl.classList.remove('active');
        submenuEl.style.maxHeight = 0 + 'px';
      } else {
        submenuItem.classList.add('active');
        submenuEl.classList.add('active');
        submenuEl.style.maxHeight = submenuEl.scrollHeight + 100 + 'px';
      }
    });
  });
});
