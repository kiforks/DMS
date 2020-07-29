function calculator(parent) {
  let carYear = parent.querySelector('.personal-area__new-select--year').textContent;
  let currentYear = new Date().getFullYear();
  let coefficient;

  if(!carYear && +carYear) {
    coefficient = currentYear - carYear - 1;
  }

  console.log(currentYear);
  console.log(carYear);
}

function toCalculate(button, parentSelector) {
  let buttonCalculate = document.querySelectorAll(`.${button}`);

  buttonCalculate.forEach(button => {
    button.onclick = event => {
      let parentTab = event.target.closest(`.${parentSelector}`);

      if(!parentTab) return;

      calculator(parentTab);
    }
  })
}

toCalculate('personal-area__button--calculator', 'personal-area__item--active');

