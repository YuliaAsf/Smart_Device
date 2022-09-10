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


