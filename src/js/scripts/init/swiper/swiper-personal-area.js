try {
  function initPersonalArea(slider) {
    if(!slider) {
      return;
    }

    let personalArea = new Swiper(`.${slider.containerClass}`, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: `.${slider.container}__button--next${slider.modify}`,
        prevEl: `.${slider.container}__button--prev${slider.modify}`,
        disabledClass: `${slider.container}__button--disabled`,
      },
      thumbs: {
        slideThumbActiveClass: 'personal-area__thumbs-item--active',
        thumbsContainerClass: 'personal-area__thumbs-box',
        swiper: {
          el: '.personal-area--thumbs',
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          noSwipingClass: 'no-swipe',
          noSwiping: true,
          onlyExternal: true,
          allowSlidePrev: false,
          allowSlideNext: false,
          slidesPerView: 'auto',
          wrapperClass: `${slider.container}__thumbs`,
          slideClass: `${slider.container}__thumbs-item`,
          slideActiveClass: `${slider.container}__thumbs-item--active`,
          slideDuplicateActiveClass: `${slider.container}__thumbs-item-duplicate--active`,
          slideVisibleClass: `${slider.container}__thumbs-item--visible`,
          slideDuplicateClass: `${slider.container}__thumbs-item-duplicate`,
          slideNextClass: `${slider.container}__thumbs-item--next`,
          slideDuplicateNextClass: `${slider.container}__thumbs-item-duplicate--next`,
          slidePrevClass: `${slider.container}__thumbs-item--prev`,
          slideDuplicatePrevClass: `${slider.container}__thumbs-item-duplicate--prev`,
          slideBlankClass: `${slider.container}__invisible-blank`,
          modifierClass: `${slider.container}__pagination`,
          hiddenClass: `${slider.container}__hidden`,
          progressbarFillClass: `${slider.container}__progressbar-fill`,
          clickableClass: `${slider.container}__clickable`,
          lockClass: `${slider.container}__lock`,
          progressbarOppositeClass: `${slider.container}__progressbar-opposite`,
        }
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

  const personalArea = {
    container: 'personal-area',
    containerClass: 'personal-area--main',
    modify: '-contacts'
  };

  initPersonalArea(personalArea);

} catch {
  test();
}

function test() {
  return;
}





