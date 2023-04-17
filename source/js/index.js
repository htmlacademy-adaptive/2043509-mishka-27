const page = document.querySelector('.page');
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
