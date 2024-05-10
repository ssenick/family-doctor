/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, Parallax, Grid, Mousewheel, Controller } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.slider-promotions__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    const promotionSLider = new Swiper('.slider-promotions__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,
      watchSlidesProgress: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
*/
      // Пагинация

      pagination: {
        el: '.slider-promotions__dotts.dotts',
        type: 'bullets',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.slider-promotions__btn.btn-arrow_next',
        nextEl: '.slider-promotions__btn.btn-arrow_prev',
      },
      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      // События
      on: {
        init: () => {},
      },
    });
  }
  //=================================
  let doctorsSlider;
  if (document.querySelector('.slider-doctors__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер

    doctorsSlider = new Swiper('.slider-doctors__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, EffectFade, Parallax],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,
      watchSlidesProgress: true,
      parallax: true,
      updateOnWindowResize: true,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"

      navigation: {
        prevEl: '.slider-doctors__btn.btn-arrow_next',
        nextEl: '.slider-doctors__btn.btn-arrow_prev',
      },

      // Брейкпоинты
      /*
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
		*/
      // События
      on: {
        init: () => {},
        slideChange: () => {
          cycleAddClass(document.querySelectorAll('.doctors__item'), doctorsSlider);
        },
      },
    });
  }
  function cycleAddClass(nlist, slider) {
    let realIndex = slider.realIndex ? slider.realIndex : 0;
    for (let i = 0; i < nlist.length; i++) {
      if (nlist[i].className.includes('_active')) {
        nlist[i].classList.remove('_active');
        nlist[realIndex].classList.add('_active');
        break;
      }
    }
  }
  let doctorsList = document.querySelector('.doctors__list');
  if (doctorsList) {
    doctorsList.addEventListener('click', (e) => {
      if (e.target.closest('.doctors__item')) {
        filterActiveLink(document.querySelectorAll('.doctors__item'), e.target, doctorsSlider);
      }
    });
  }
  function filterActiveLink(nlist, target, slider) {
    for (let index = 0; index < nlist.length; index++) {
      const element = nlist[index];
      element.classList.remove('_active');
      if (target.closest('.doctors__item') && !target.closest('.doctors__item').classList.contains('_active')) {
        target.closest('.doctors__item').classList.add('_active');
        slider.slideTo(index);
      }
    }
  }
  //=================================

  if (document.querySelector('.slider-quiz__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    const sliderQuiz = new Swiper('.slider-quiz__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Grid, Mousewheel, Parallax, Controller],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      watchSlidesProgress: true,
      //parallax: true,
      updateOnWindowResize: true,
      mousewheel: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
*/
      // Пагинация

      pagination: {
        el: '.slider-quiz__pagination',
        type: 'bullets',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
      /*
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.slider-promotions__btn.btn-arrow_next',
        nextEl: '.slider-promotions__btn.btn-arrow_prev',
      },
		*/
      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1100: {
          grid: false,
        },
        1500: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
      },

      // События
      on: {
        init: () => {},
      },
    });
  }
  //=================================
  if (document.querySelector('.slider-promotions__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    const reviewsSLider = new Swiper('.reviews__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Parallax],
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      watchSlidesProgress: true,
      updateOnWindowResize: true,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
*/
      // Пагинация

      pagination: {
        el: '.reviews__dotts.dotts',
        type: 'bullets',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.slider-reviews__btn.btn-arrow_next',
        nextEl: '.slider-reviews__btn.btn-arrow_prev',
      },
      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
          autoHeight: false,
        },
        1400: {
          slidesPerView: 2,
          spaceBetween: 30,
          autoHeight: false,
        },
      },

      // События
      on: {
        init: () => {},
      },
    });
  }
  //=================================
  if (document.querySelector('.slider-license')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    const reviewsSLider = new Swiper('.slider-license', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      watchSlidesProgress: true,
      updateOnWindowResize: true,
      pagination: {
        el: '.license__dotts.dotts',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        prevEl: '.license__btn.btn-arrow_next',
        nextEl: '.license__btn.btn-arrow_prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoHeight: false,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
  //=================================
  if (document.querySelector('.slider-about__body')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    const reviewsSLider = new Swiper('.slider-about__body', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      watchSlidesProgress: true,
      updateOnWindowResize: true,
      pagination: {
        el: '.slider-about__dotts.dotts',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        prevEl: '.slider-about__btn.btn-arrow_next',
        nextEl: '.slider-about__btn.btn-arrow_prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoHeight: false,
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});

//=================================
