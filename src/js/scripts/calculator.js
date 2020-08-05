function calculator(parent) {
  let coefficient;
  let rate;
  let exciseTax;
  let toll;
  let nds;
  let totalPrice;
  let currentYear = new Date().getFullYear();
  let exciseTaxSelector = parent.querySelector('.personal-area__value--excise-tax');
  let fullPriceSelector = parent.querySelector('.personal-area__value--full-price');
  let ndsSelector = parent.querySelector('.personal-area__value--nds');
  let tollSelector = parent.querySelector('.personal-area__value--toll');
  let totalCustomsDutiesSelector = parent.querySelector('.personal-area__value--total');
  let priceValue = +parent.querySelector('.personal-area__input--cost').value;
  let carYear = +parent.querySelector('.personal-area__new-select--year').textContent;
  let engineType = `${parent.querySelector('.personal-area__new-select--type').textContent}`;
  let volume = +parent.querySelector('.personal-area__new-select--volume').textContent;

  if(carYear) {
    coefficient = currentYear - carYear - 1;

    if(coefficient > 15) {
      coefficient = 15;
    }
  }

  if(engineType && volume && coefficient) {
    if(engineType === 'Бензин') {
      rate = 50;

      if(volume > 3) {
        rate = 100;
      }
    } else if (engineType === 'Дизель') {
      rate = 75;

      if(volume > 3.5) {
        rate = 150;
      }
    }

    if(rate && priceValue) {
      exciseTax = Math.round(rate * volume * coefficient);

      toll = Math.round(priceValue * 0.1);

      nds = Math.round((exciseTax + toll + priceValue) * 0.2);

      totalPrice = Math.round(toll + nds + exciseTax + priceValue);

      // НДС
      ndsSelector.textContent = `${nds}`;

      // Мито
      tollSelector.textContent = `${toll}`;

      // Акцизний збір
      exciseTaxSelector.textContent = `${exciseTax}`;

      // Ціна з розмитненням
      fullPriceSelector.textContent = `${totalPrice}`;

      //Всього митних платежів
      totalCustomsDutiesSelector.textContent = `${toll + nds + exciseTax}`;
    }
  }
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

