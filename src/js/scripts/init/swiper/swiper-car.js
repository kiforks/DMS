try {
  function initCarSlider(slider) {
    if(!slider) {
      return;
    }

    let carSlider = new Swiper(`.${slider.containerClass}`, {
      pagination: {
        el: `.${slider.container}__pagination`,
        type: `bullets`,
        currentClass: `${slider.container}__current`,
        totalClass: `${slider.container}__total`,
        bulletClass: `${slider.container}__bullet`,
        bulletActiveClass: `${slider.container}__bullet--active`,
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className}"><img class="${slider.container}__bullet-image" src="img/main/car/slider/photo-${index + 1}.jpg"></div>`;
        },
      },
      effect: 'slide',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: `.${slider.container}__button--next`,
        prevEl: `.${slider.container}__button--prev`,
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

  const carSlider = {
    container: 'car-slider',
    containerClass: 'car-slider'
  };



  initCarSlider(carSlider);
} catch {
  test();
}

function test() {
  return;
}







