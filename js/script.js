window.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(document).on("click", "nav a", function (e) {
      e.preventDefault();
      var id = $(this).attr("href");
      var top = $(id).offset().top;
      $("body, html").animate({
        scrollTop: top,
      },
        1500
      );
    });
  });

  $(".hero__btn").on('click', function () {
    $('html, body').animate({
      scrollTop: $("#contacts").offset().top
    }, 2000);
  });

  $('.burger').on('click', function () {
    $(this).toggleClass("active"),
      $('#burger-menu').fadeToggle()
  })

  $('.tablet-search__open').on('click', function (e) {
    e.preventDefault();
    $(".tablet-search__input").toggleClass("is-active");
    $(".header__search-form").toggleClass("is-active");
    $(".header__search-tablet").toggleClass("is-active");
    $(".tablet-search__close").toggleClass("is-active");
    $(".header__top-container").toggleClass("is-active");
  });

  $('.tablet-search__close').on('click', function (e) {
    e.preventDefault();
    $(".tablet-search__input").removeClass("is-active");
    $(".header__search-form").removeClass("is-active");
    $(".header__search-tablet").removeClass("is-active");
    $(".tablet-search__close").removeClass("is-active");
    $(".header__top-container").toggleClass("is-active");
    $(".tablet-search__input").value = "";
  });

  $(".dropdown-btn").click(function () {
    if ($(this).next(".menu").is(":hidden")) {
      $(".menu").slideUp();
      $(".header__bottom-button").removeClass("is-active");
      $(this).next(".menu").slideDown();
      $(this).addClass("is-active");
    } else {
      $(this).next(".menu").slideUp();
      $(this).removeClass("is-active");
    }
  });

  $(document).click(function (e) {
    if ($(e.target).closest(".dropdown-btn, .menu").length) return; //при клике на эти блоки не скрывать меню (кнопка и любая открытая меню)
    $(".menu").slideUp();
    $(".header__bottom-button").removeClass("is-active");
    e.stopPropagation();
  });

  const swiperHero = new Swiper(".hero-swiper", {
    slidesPerView: "auto",
    allowTouchMove: false,
    centeredSlidesBounds: {
      centeredSlides: true,
    },
    loop: true,
    autoplay: {
      delay: 10000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: false,
    },
  });

  const element = document.querySelector("#selectgalery");
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholderValue: false,
  });

  const swiperGallery = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      type: "fraction",
      el: ".gallery__pagination",
      clickable: true,
      slideToClickedSlide: true,
    },
    navigation: {
      nextEl: ".gallery-button__next",
      prevEl: ".gallery-button__prev",
    },
    a11y: {
      paginationBulletMessage: "Переход на слайд {{index}}",
      prevSlideMessage: "Перейти на предыдущий слайд",
      nextSlideMessage: "Перейти на следующий слайд",
    },

    breakpoints: {
      580: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
      1400: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10,
        slidesPerGroup: 3,
      },
      1690: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },
    },
  });

  $(function () {
    $(
      "#accordion-france, #accordion-germany, #accordion-italy, #accordion-russia, #accordion-belgium"
    ).accordion({
      icons: {
        header: false,
        activeHeader: false,
      },
      collapsible: true,
      heightStyle: "content",
      active: 0,
    });
  });
  function tabs(btnTab, btnTabActive, content, contentActive) {
    document.querySelectorAll(btnTab).forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll(btnTab).forEach((element) => {
          element.classList.remove(btnTabActive);
        });
        tabsBtn.classList.add(btnTabActive);
        document.querySelectorAll(content).forEach(function (tabContent) {
          tabContent.classList.remove(contentActive);
        });
        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add(contentActive);

        let width = $(window).width();
        if (width <= 768) {
          $(tabsBtn).on("click", function () {
            $("html,body").animate({
              scrollTop: $(`[data-target="${path}"]`).offset().top + "px",
            },
              2000
            );
          });
        }
      });
    });
  }
  tabs(
    ".catalog__list-btn",
    "catalog-active",
    ".catalog__content",
    "catalog__content-active"
  );
  tabs(
    ".accordion-france-link",
    "block__link-active",
    ".france",
    "card-visible"
  );
  tabs(
    ".accordion-germany-link",
    "block__link-active",
    ".germany",
    "card-visible"
  );
  tabs(
    ".accordion-italy-link",
    "block__link-active",
    ".italian",
    "card-visible"
  );
  tabs(".accordion-rus-link", "block__link-active", ".russian", "card-visible");
  tabs(
    ".accordion-belg-link",
    "block__link-active",
    ".belgium",
    "card-visible"
  );

  $('.events__btn').on('click', function () {
    $('.event').slideDown('slow')
    $(this).fadeOut()
  })

  let swiperEvent = new Swiper(".events__swiper", {
    slidesPerGroup: 1,
    slidesPerView: 1,
    allowTouchMove: true,

    pagination: {
      el: ".events__pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        allowTouchMove: false,
      },
      970: {
        slidesPerView: 2,
        allowTouchMove: false,
      },
      1430: {
        slidesPerView: 3,
        allowTouchMove: false,
      },
    },
  });

   let publicationsSwiper = function () {
    if (window.innerWidth >= 580) {
      let swiperPublications = new Swiper('.publications-swiper', {
        pagination: {
          el: ".publications-btn__pagination",
          type: "fraction",
          clickable: true,
          slideToClickedSlide: true,
        },
        loop: false,
        navigation: {
          nextEl: ".publications-btn__next",
          prevEl: ".publications-btn__prev",
        },

        a11y: {
          paginationBulletMessage: "Переход на слайд {{index}}",
          prevSlideMessage: "Перейти на предыдущий слайд",
          nextSlideMessage: "Перейти на следующий слайд",
        },

        breakpoints: {
          580: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
          },
          920: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1400: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
          }
        },
      });

      swiperPublications.on('resize', function () {
        if (innerWidth < 580) {
          swiperPublications.destroy();
        }
      });
    }
  }
  window.addEventListener('resize', () => {
    publicationsSwiper();
  })
  publicationsSwiper();

  let checkboxVisible = () => {
    document.querySelectorAll('.checkbox__real').forEach(el => {
      if (el.checked === true) {
        el.parentNode.classList.add('visible')
      }
    })
  }

  document.querySelector('.form-checkbox__title').addEventListener('click', function () {
    document.querySelector('.form-checkbox__title').classList.toggle('dropdown');
    document.querySelectorAll('.checkbox').forEach(el => {
      el.classList.toggle('visible')
      checkboxVisible();
    })
  })

  let visibilityDelete = () => {
    let checkbox = document.querySelectorAll('.checkbox__real');
    buttonToggle = document.querySelector('.form-checkbox__title');
    for (let i = 0; i < checkbox.length; i++) {
      let el = checkbox[i];
      el.addEventListener('click', () => {
        if (!el.checked && !buttonToggle.classList.contains('dropdown')) {
          el.parentNode.classList.remove('visible');
        }
      })
    }
  }

  checkboxVisible();
  visibilityDelete();

  tippy("#tooltip-1", {
    content: "Пример современных тенденций - современная методология разработки",
    maxWidth: 264,
  });

  tippy("#tooltip-2", {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    maxWidth: 263,
  });
  tippy("#tooltip-3", {
    content: "В стремлении повысить качество ",
    maxWidth: 263,
  });

  const swiperProjects = new Swiper(".projects__swipper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    clickable: true,
    slideToClickedSlide: true,
    loop: false,
    navigation: {
      nextEl: ".projects-swiper__btn-next",
      prevEl: ".projects-swiper__btn-prev",
    },
    a11y: {
      paginationBulletMessage: "Переход на слайд {{index}}",
      prevSlideMessage: "Перейти на предыдущий слайд",
      nextSlideMessage: "Перейти на следующий слайд",
    },

    breakpoints: {
      580: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  let flag = 0;

  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector("#map").offsetTop;

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {
      ymaps.ready(init);
      function init() {
        const myMap = new ymaps.Map(
          "map", {
          center: [55.758747, 37.601187],
          controls: [],
          zoom: 17,
        }, {
          suppressMapOpenBlock: true,
        }
        );
        var myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.8, 37.8], // координаты точки
          },
        });
        var myPlacemark = new ymaps.Placemark(
          [55.758463, 37.601079], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/point.png",
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42],
        }
        );

        myMap.geoObjects.add(myPlacemark);
      }

      flag = 1;
    }
  });

  $(window).on('resize', function () {
    var win = $(this); //this = window
    if (win.width() <= 580) {
      $('.contacts__heading').after($('.contacts__data'));
    } else {
      $('.contacts-form').before($('.contacts__data'))
    }
  });

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999 99 99");
  im.mask(selector);

  new JustValidate(".contacts-form", {
    focusWrongField: true,
    colorWrong: "#D11616",
    messages: {
      name: {
        minLength: "Введите минимум 2 символа",
        maxLength: "Допустимо не более 20 символов",
        required: "Как Вас зовут?",
        function: "Недопустимый формат",
      },
      tel: {
        required: "Укажите Ваш телефон",
        function: "Введите номер полностью! Не хватает пары цифр :)",
      },
    },

    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
        function: (name, value) => {
          if (name === "^[A-Za-zА-Яа-яЁё\s]") {
            return true;
          } else {
            return false;
          }
        },
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
  });
});
