// Кнопка скрытия/показа контента в разделе "О компании"

const button = document.querySelector('.about button');
const contentBlocks = document.querySelectorAll('.about p');
const contentElement = document.querySelector('.about span');

// const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryMobile = window.matchMedia('(max-width: 767.9px)');

contentBlocks[2].style.display = 'none';
contentBlocks[3].style.display = 'none';

const mediaQueryTablet = window.matchMedia('(min-width: 768px)');

function handleTabletChange(evt) {
  if (evt.matches) {
    contentElement.style.display = 'block';
  } else {
    contentElement.style.display = 'none';
  }
}

mediaQueryTablet.addListener(handleTabletChange);
handleTabletChange(mediaQueryTablet);

for (let i = 0; i < contentBlocks.length; i++) {

  const hideContent = () => {
    contentBlocks[2].style.display = 'none';
    contentBlocks[3].style.display = 'none';
    button.textContent = 'Подробнее';
  };

  const showContent = () => {
    contentBlocks[2].style.display = 'block';
    contentBlocks[3].style.display = 'block';
    button.textContent = 'Cвернуть';
  };


  button.addEventListener('click', ()=> {

    if (mediaQueryMobile.matches) {
      if (contentBlocks[i].classList.contains('hidden-mobile')) {
        contentBlocks[i].classList.remove('hidden-mobile');
        showContent();
        contentElement.style.display = 'block';
      } else {
        hideContent();
        contentBlocks[i].classList.add('hidden-mobile');
        contentElement.style.display = 'none';
      }
    }


    if (mediaQueryTablet.matches) {

      if (contentBlocks[i].classList.contains('hidden-tablet')) {
        showContent();
        contentBlocks[i].classList.remove('hidden-tablet');
      } else {
        hideContent();
        contentBlocks[i].classList.add('hidden-tablet');
      }
    }
  });
}


// Аккордеон в футере

const buttons = document.querySelectorAll('.page-footer__button');
const wrappers = document.querySelectorAll('.page-footer__wrapper-block');

for (let i = 0; i < wrappers.length; i++) {
  wrappers[i].classList.remove('nojs');
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (evt) => {

    buttons.forEach((button) => {

      if (button !== evt.target) {
        button.classList.remove('page-footer__button--open');
        button.classList.add('page-footer__button--close');

        wrappers.forEach((element) => {
          element.classList.remove('opened');
          element.classList.add('closed');
        });
      }
    });

    if (buttons[i].classList.contains('page-footer__button--close')) {
      buttons[i].classList.remove('page-footer__button--close');
      buttons[i].classList.add('page-footer__button--open');
      wrappers[i].classList.remove('closed');
      wrappers[i].classList.add('opened');
    } else {
      buttons[i].classList.remove('page-footer__button--open');
      buttons[i].classList.add('page-footer__button--close');
      wrappers[i].classList.remove('opened');
      wrappers[i].classList.add('closed');
    }
  });
}


