window.addEventListener('DOMContentLoaded', () => {
  const ACTIVE_OVERLAY_CLASSNAME = 'active';

  const overlayEl = document.querySelector('.overlay');
  const togglePopupEls = document.querySelectorAll('#togglePopup');
  const closeBtnEls = document.querySelectorAll('#closeOverlay');

  const offScroll = () => document.body.classList.add('no-scroll');
  const onScroll = () => document.body.classList.remove('no-scroll');

  const toggleOnOverlayEl = (el) => {
    offScroll();
    el.classList.add(ACTIVE_OVERLAY_CLASSNAME);
  };

  const toggleOffOverlayEl = (el) => {
    onScroll();
    el.classList.remove(ACTIVE_OVERLAY_CLASSNAME);
    overlayEl.querySelector('form').reset();
    overlayEl
      .querySelectorAll('.error')
      .forEach((error) => error.classList.remove('error'));
  };

  const closePopupElByClickOnOverlayEl = (e) => {
    e.target === overlayEl && toggleOffOverlayEl(overlayEl);
  };

  const closePopupElByPressOnEsc = (e) => {
    e.key === 'Escape' && toggleOffOverlayEl(overlayEl);
  };

  togglePopupEls.forEach((btn) =>
    btn.addEventListener('click', () => {
      toggleOnOverlayEl(overlayEl);
      window.addEventListener('keydown', closePopupElByPressOnEsc);
      window.addEventListener('click', closePopupElByClickOnOverlayEl);
    })
  );

  closeBtnEls.forEach((btn) =>
    btn.addEventListener('click', () => {
      toggleOffOverlayEl(overlayEl);
      window.removeEventListener('keydown', closePopupElByPressOnEsc);
      window.removeEventListener('click', closePopupElByClickOnOverlayEl);
    })
  );
});
