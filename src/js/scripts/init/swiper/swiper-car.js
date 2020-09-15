try {
  function initCarSlider(slider) {
    if(!slider) {
      return;
    }

    const carSlider = new Swiper(`.${slider.containerClass}`, {
      pagination: {
        el: `.${slider.container}__pagination`,
        type: `bullets`,
        currentClass: `${slider.container}__current`,
        totalClass: `${slider.container}__total`,
        bulletClass: `${slider.container}__bullet`,
        bulletActiveClass: `${slider.container}__bullet--active`,
        clickable: true,
      },
      effect: 'slide',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        slideThumbActiveClass: `${slider.container}__thumbs-item--active`,
        swiper: {
          el: `.${slider.containerClass}--thumbs`,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slidesPerView: 6,
          spaceBetween: 14,
          breakpoints: {
            1440: {
              spaceBetween: 14,
            },
            1200: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 4,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 6,
            }
          },
          thumbsContainerClass: `${slider.container}__thumbs-container`,
          wrapperClass: `${slider.container}__thumbs`,
          slideClass: `${slider.container}__thumbs-item`,
          slideActiveClass: `${slider.container}__thumbs--active`,
          slideDuplicateActiveClass: `${slider.container}__thumbs-item-duplicate--active`,
          slideVisibleClass: `${slider.container}__thumbs-item--visible`,
          slideDuplicateClass: `${slider.container}__thumbs-item-duplicate`,
          slideNextClass: `${slider.container}__thumbs-item--next`,
          slideDuplicateNextClass: `${slider.container}__item-duplicate--next`,
          slidePrevClass: `${slider.container}__thumbs-item--prev`,
          slideDuplicatePrevClass: `${slider.container}__thumbs-item-duplicate--prev`,
          slideBlankClass: `${slider.container}__thumbs-invisible-blank`,
          modifierClass: `${slider.container}__thumbs-pagination`,
          hiddenClass: `${slider.container}__thumbs-hidden`,
          progressbarFillClass: `${slider.container}__thumbs-progressbar-fill`,
          clickableClass: `${slider.container}__thumbs-clickable`,
          lockClass: `${slider.container}__thumbs-lock`,
          progressbarOppositeClass: `${slider.container}__thumbs-progressbar-opposite`,
        },
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








