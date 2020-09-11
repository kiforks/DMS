try {
  function initServices(slider) {
    if(!slider) {
      return;
    }

    if(!document.querySelector('.gallery')) {
      let services = new Swiper(`.${slider.containerClass}`, {
        pagination: {
          el: `.${slider.mainClass}__pagination`,
          type: `fraction`,
          currentClass: `${slider.mainClass}__current`,
          totalClass: `${slider.mainClass}__total`,
          bulletClass: `${slider.mainClass}__bullet`,
          bulletActiveClass: `${slider.mainClass}__bullet--active`
        },
        navigation: {
          nextEl: `.${slider.mainClass}__button--next`,
          prevEl: `.${slider.mainClass}__button--prev`,
          disabledClass: `${slider.mainClass}__button--disabled`,
        },
        loop: true,
        autoplay: {
          delay: 5000
        },
        speed: 500,
        slidesPerView: 1,
        wrapperClass: `${slider.mainClass}__list`,
        slideClass: `${slider.mainClass}__item`,
        slideActiveClass: `${slider.mainClass}__item--active`,
        slideDuplicateActiveClass: `${slider.mainClass}__item-duplicate--active`,
        slideVisibleClass: `${slider.mainClass}__item--visible`,
        slideDuplicateClass: `${slider.mainClass}__item-duplicate`,
        slideNextClass: `${slider.mainClass}__item--next`,
        slideDuplicateNextClass: `${slider.mainClass}__item-duplicate--next`,
        slidePrevClass: `${slider.mainClass}__item--prev`,
        slideDuplicatePrevClass: `${slider.mainClass}__item-duplicate--prev`,
        slideBlankClass: `${slider.mainClass}__invisible-blank`,
        bulletClass: `${slider.mainClass}__bullet`,
        bulletActiveClass: `${slider.mainClass}__bullet--active`,
        modifierClass: `${slider.mainClass}__pagination`,
        hiddenClass: `${slider.mainClass}__hidden`,
        progressbarFillClass: `${slider.mainClass}__progressbar-fill`,
        clickableClass: `${slider.mainClass}__clickable`,
        lockClass: `${slider.mainClass}__lock`,
        progressbarOppositeClass: `${slider.mainClass}__progressbar-opposite`,
        breakpoints: {
          320: {
            spaceBetween: 20,
            autoHeight: true,
            pagination: {
              type: 'bullets',
              clickable: true
            }
          },
          768: {
            spaceBetween: 60,
            autoHeight: false,
            pagination: {
              type: 'fraction'
            }
          }
        }
      });
    }
  }

  const services = {
    mainClass: 'services',
    containerClass: 'services__wrapper'
  };

  initServices(services);
} catch {
  test();
}

function test() {
  return;
}










