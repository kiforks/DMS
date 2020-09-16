try {
  function initBullets(slider) {
    if(!slider) {
      return;
    }

    let tabText = document.querySelectorAll(`.${slider.textClass}`);

    let tab = new Swiper(`.${slider.containerClass}`, {
      pagination: {
        el: `.${slider.container}__pagination`,
        type: `bullets`,
        currentClass: `${slider.container}__current`,
        totalClass: `${slider.container}__total`,
        bulletClass: `${slider.container}__bullet`,
        bulletActiveClass: `${slider.container}__bullet--active`,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + tabText[index].textContent + '</span>';
        },
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: `.${slider.container}__button--next${slider.modify}`,
        prevEl: `.${slider.container}__button--prev${slider.modify}`,
        disabledClass: `${slider.container}__button--disabled`,
      },
      loop: false,
      noSwiping: true,
      onlyExternal: true,
      speed: 500,
      autoHeight: true,
      slidesPerView: 1,
      wrapperClass: `${slider.container}__list`,
      slideClass: `${slider.container}__item`,
      slideActiveClass: `${slider.container}__item--active`,
      slideDuplicateActiveClass: `${slider.container}__item-duplicate--active`,
      slideVisibleClass: `${slider.container}__item--visible`,
      slideDuplicateClass: `${slider.container}__item-duplicate`,
      slideNextClass: `${slider.container}__item--next`,
      slideDuplicateNextClass: `${slider.container}__item-duplicate--next`,
      slidePrevClass: `${slider.container}__item--prev`,
      slideDuplicatePrevClass: `${slider.container}__item-duplicate--prev`,
      slideBlankClass: `${slider.container}__invisible-blank`,
      modifierClass: `${slider.container}__pagination`,
      hiddenClass: `${slider.container}__hidden`,
      progressbarFillClass: `${slider.container}__progressbar-fill`,
      clickableClass: `${slider.container}__clickable`,
      lockClass: `${slider.container}__lock`,
      progressbarOppositeClass: `${slider.container}__progressbar-opposite`,
    });
  }


  const tabMain = {
    container: 'tab',
    containerClass: 'tab',
    textClass: 'tab__text',
    modify: '-main'
  };

  const tabBlue = {
    container: 'tab',
    containerClass: 'tab__box',
    textClass: 'tab__text--blue'
  };

  const tabAbout = {
    container: 'tab',
    containerClass: 'tab--about',
    textClass: 'tab__text--about',
    modify: '-about'
  };

  const tabContacts = {
    container: 'tab',
    containerClass: 'tab__contacts',
    textClass: 'tab__text--contacts',
    modify: '-contacts'
  };

  const tabStory = {
    container: 'tab',
    containerClass: 'tab--story',
    textClass: 'tab__text--story',
    modify: '-story'
  };

  const tabCopart = {
    container: 'tab',
    containerClass: 'tab--copart',
    textClass: 'tab__text--copart',
    modify: '-copart'
  };

  const tabIaai = {
    container: 'tab',
    containerClass: 'tab--iaai',
    textClass: 'tab__text--iaai',
    modify: '-iaai'
  };

  const tabAdesa = {
    container: 'tab',
    containerClass: 'tab--adesa',
    textClass: 'tab__text--adesa',
    modify: '-adesa'
  };

  const tabManheim = {
    container: 'tab',
    containerClass: 'tab--manheim',
    textClass: 'tab__text--manheim',
    modify: '-manheim'
  };

  const tabPurchase = {
    container: 'tab',
    containerClass: 'tab--purchase',
    textClass: 'tab__text--purchase',
    modify: '-purchase'
  };

  const tabInfo = {
    container: 'tab',
    containerClass: 'tab--info',
    textClass: 'tab__text--info'
  };

  const tabDelivery = {
    container: 'tab',
    containerClass: 'tab--delivery',
    textClass: 'tab__text--delivery',
    modify: '-delivery'
  };

  const tabSpeed = {
    container: 'tab',
    containerClass: 'tab--speed',
    textClass: 'tab__text--speed',
    modify: '-speed'
  };

  const tabPort = {
    container: 'tab',
    containerClass: 'tab--port',
    textClass: 'tab__text--port'
  };

  const personalAreaCalc = {
    container: 'personal-area',
    containerClass: 'personal-area--calculator',
    textClass: 'personal-area__subtitle',
    modify: '-contacts'
  };



  initBullets(tabMain);
  initBullets(tabBlue);
  initBullets(tabAbout);
  initBullets(tabContacts);
  initBullets(tabStory);
  initBullets(tabCopart);
  initBullets(tabIaai);
  initBullets(tabAdesa);
  initBullets(tabManheim);
  initBullets(tabPurchase);
  initBullets(tabInfo);
  initBullets(tabDelivery);
  initBullets(tabSpeed);
  initBullets(tabPort);
  initBullets(personalAreaCalc);


  function disabledDelete(selector) {
    let disabledButton = document.querySelector(`.${selector}`);

    if(disabledButton && document.querySelector('.tab--disabled')) {
      disabledButton.classList.remove(`${selector}`);
    }
  }

  disabledDelete('tab__button--disabled');
} catch {
  test();
}

function test() {
  return;
}





