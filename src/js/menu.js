(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),

    closeMenuBtn: document.querySelector('[data-menu-close]'),

    modal: document.querySelector('[data-menu]'),

    menuLinks: document.querySelectorAll('.menu-link'),
    shopButton: document.querySelector('.menu-btn-shop'),
  };

  refs.openMenuBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-open');
  });

  refs.closeMenuBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-open');
  });

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });
  });

  refs.shopButton.addEventListener('click', () => {
    refs.modal.classList.remove('is-open');
  });
})();
