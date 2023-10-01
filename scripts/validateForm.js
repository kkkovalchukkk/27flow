window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const checkInput = (input) => input.value;

  const addInputError = (input, errorClassName) =>
    input.classList.add(errorClassName);

  const removeInputError = (input, errorClassName) =>
    input.classList.remove(errorClassName);

  const validateForm = (cfg) => {
    const formEls = document.querySelectorAll(cfg.form);
    formEls &&
      formEls.forEach((form) => {
        const inputEls = form.querySelectorAll('input');
        const telInputEl = form.querySelector('input[type="tel"]');
        const emailInputEl = form.querySelector('input[type="email"]');
        const nameInputEl = form.querySelector('input[name="name"]');

        telInputEl &&
          IMask(telInputEl, {
            mask: '+{7} (000) 000-00-00',
          });

        telInputEl &&
          telInputEl.addEventListener('input', () => {
            const l = telInputEl.value.length;
            if (l !== 18) {
              addInputError(telInputEl, 'error');
            } else {
              removeInputError(telInputEl, 'error');
            }
          });

        emailInputEl &&
          emailInputEl.addEventListener('input', () => {
            if (!emailRegex.test(emailInputEl.value)) {
              addInputError(emailInputEl, 'error');
            } else {
              removeInputError(emailInputEl, 'error');
            }
          });

        nameInputEl &&
          nameInputEl.addEventListener('keydown', (e) => {
            e.code === 'Space' && e.preventDefault();
          });

        emailInputEl &&
          emailInputEl.addEventListener('keydown', (e) => {
            e.code === 'Space' && e.preventDefault();
          });
        telInputEl &&
          telInputEl.addEventListener('keydown', (e) => {
            e.code === 'Space' && e.preventDefault();
          });

        nameInputEl &&
          nameInputEl.addEventListener('input', (e) => {
            const value = e.target.value.trim().replace(/\d/g, '');
            nameInputEl.value =
              value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            if (value.length < 2) {
              addInputError(nameInputEl, 'error');
            } else {
              removeInputError(nameInputEl, 'error');
            }
          });

        form.addEventListener('submit', (e) => {
          e.preventDefault();

          inputEls.forEach((input) => {
            if (!checkInput(input)) {
              addInputError(input, 'error');
            } else {
              removeInputError(input, 'error');
            }
          });

          if (!emailRegex.test(emailInputEl.value)) {
            addInputError(emailInputEl, 'error');
          } else {
            removeInputError(emailInputEl, 'error');
          }

          const l = telInputEl.value.length;
          if (l !== 18) {
            addInputError(telInputEl, 'error');
          } else {
            removeInputError(telInputEl, 'error');
          }

          if (nameInputEl.value.length < 2) {
            addInputError(nameInputEl, 'error');
          } else {
            removeInputError(nameInputEl, 'error');
          }

          !form.querySelectorAll('.error').length && form.submit();
        });
      });
  };

  validateForm({ form: '.form' });
});
