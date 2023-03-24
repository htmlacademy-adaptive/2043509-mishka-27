const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainHeader = document.querySelector('.header-main');
const popUpMenu = document.querySelector('.pop-up-menu');

mainHeader.classList.remove('no-js')

const togglePopUp = function() {
  mainNavToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  popUpMenu.classList.toggle('pop-up-menu--is-open');
  mainNavToggle.classList.toggle('main-nav__toggle--close');
  });
}

togglePopUp();

// Открытие/закрытие модального окна

  const modalButtons = document.querySelectorAll('.modal-button');
  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__button');

  const onModalButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.add('is-open');
  };

  const onModalCloseButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.remove('is-open');
  };

  const onModalClick = (evt) => {
    if (evt.target === modal) {
      modal.classList.remove("is-open");
    }
  };

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('is-open');
    }
  };

  modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onDocumentKeydown);
