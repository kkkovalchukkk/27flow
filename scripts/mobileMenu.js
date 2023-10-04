window.addEventListener('DOMContentLoaded', () => {
  const ACTIVE_MOBILE_MENU_CLASSNAME = 'active';

  const mobileMenuEl = document.querySelector('.mobile-menu');
  const linksInMobileMenuEls = mobileMenuEl.querySelectorAll('a');
  const openMobileMenuBtnEls = document.querySelectorAll('.toggleMobileMenu');
  const closeMobileMenuBtnEls = document.querySelectorAll('.closeMobileMenu');

  openMobileMenuBtnEls.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.classList.add('no-scroll');
      mobileMenuEl.classList.add(ACTIVE_MOBILE_MENU_CLASSNAME);
    });
  });
  closeMobileMenuBtnEls.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.classList.remove('no-scroll');
      mobileMenuEl.classList.remove(ACTIVE_MOBILE_MENU_CLASSNAME);
    });
  });

  linksInMobileMenuEls.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('no-scroll');
      mobileMenuEl.classList.remove(ACTIVE_MOBILE_MENU_CLASSNAME);
    });
  });
});
