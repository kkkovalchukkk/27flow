window.addEventListener('DOMContentLoaded', () => {
  const subMenuEls = document.querySelectorAll(
    '.header__nav-list-item--submenu'
  );

  subMenuEls.forEach((submenuItem) => {
    const submenuEl = submenuItem.querySelector(
      '.header__nav-list-item-submenu'
    );

    submenuItem.addEventListener('mouseover', () => {
      submenuItem.classList.add('active');
      submenuEl.classList.add('active');
      submenuEl.style.maxHeight = submenuEl.scrollHeight + 'px';
    });

    submenuItem.addEventListener('mouseout', () => {
      submenuItem.classList.remove('active');
      submenuEl.classList.remove('active');
      submenuEl.style.maxHeight = 0 + 'px';
    });
  });
});
