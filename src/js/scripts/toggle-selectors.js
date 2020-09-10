'use strict';

function toggleSelectors(button, selector, accessibility = false, focus = false) {
  const acc = () => accessibility ? visuallyHidden : closedSelector;
  const toggleSelector = document.querySelectorAll('.' + selector);
  const toggleButton = document.querySelectorAll('.' + button);
  const closedSelector = selector + '--closed';
  const visuallyHidden = 'visually-hidden';
  const hidingClass = acc();
  const focusOpenClass = selector + '--opened';

  if(focus) {
    toggleButton.forEach(buttonItem => {
      buttonItem.onfocus = () => {
        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          if(!(classList.contains(focusOpenClass))){
            classList.add(focusOpenClass);
          }
        })
      };
      buttonItem.onblur = () => {
        toggleSelector.forEach(selectorItem => {
          selectorItem.classList.remove(focusOpenClass);
        })
      }
    })
  } else {
    toggleButton.forEach(buttonItem => {
      buttonItem.addEventListener('click', event => {
        event.preventDefault();

        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          classList.contains(hidingClass) ? classList.remove(hidingClass) : classList.add(hidingClass);
        })
      })
    })
  }
}

toggleSelectors('header__toggle-button','header');
toggleSelectors('header__toggle-button','main-body');
toggleSelectors('services__link--car','modal');
toggleSelectors('wish__link','modal');
toggleSelectors('modal__button','modal');
toggleSelectors('personal-area__button','modal-email');
toggleSelectors('modal-email__button','modal-email');
toggleSelectors('header__auto-link--modal','modal');
toggleSelectors('header__auto-link--modal','header');
toggleSelectors('header__auto-link--modal','main-body');


function anchor() {
  let link = document.querySelector('.header__link--contacts');
  let header = document.querySelector('.header');
  let body = document.querySelector('.main-body');

  link.addEventListener('click', () => {
    header.classList.add('header--closed');
    body.classList.remove('main-body--closed');
  })
}

anchor();
