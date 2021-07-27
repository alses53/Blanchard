window.addEventListener("DOMContentLoaded", function () {
  // Плавный переход по ссылкам
  $(document).ready(function () {
    $(document).on("click", "a", function (e) {
      e.preventDefault();
      var id = $(this).attr("href");
      var top = $(id).offset().top; // получаем координаты блока
      $("body, html").animate({
          scrollTop: top,
        },
        1500
      ); // плавно переходим к блоку
    });
  });

  // Открытие и закрытие бургера

  document.querySelector("#burger-btn").addEventListener("click", function () {
    document.querySelector("#burger-menu").classList.add("menu-visible");
    document.querySelector("#burger-btn").classList.add("burger-active");
  });

  document
    .querySelector(".header__burger-close")
    .addEventListener("click", function () {
      document.querySelector("#burger-menu").classList.remove("menu-visible");
      document.querySelector("#burger-btn").classList.remove("burger-active");
    });

  // Мобильный поиск

  let input = document.querySelector(".tablet-search__input");
  let form = document.querySelector(".header__search-form");
  let div = document.querySelector(".header__search-tablet");
  let buttomCloseMenu = document.querySelector(".header__close-search");

  document
    .querySelector(".tablet-search__open")
    .addEventListener("click", function (e) {
      e.preventDefault();
      if (input.value.length === 0) {
        input.classList.toggle("is-active");
        form.classList.toggle("is-active");
        div.classList.toggle("is-active");
        buttomCloseMenu.classList.toggle("is-active");
        input.value = "";
      }
    });

  document
    .querySelector(".tablet-search__close")
    .addEventListener("click", function (e) {
      e.preventDefault();
      input.classList.remove("is-active");
      form.classList.remove("is-active");
      div.classList.remove("is-active");
      buttomCloseMenu.classList.remove("is-active");
      input.value = "";
    });

  // выпадающее меню в header
  $(".dropdown-btn").click(function () {
    if ($(this).next(".menu").is(":hidden")) {
      $(".menu").slideUp();
      $(".header__buttom-button").removeClass("is-active");
      $(this).next(".menu").slideDown();
      $(this).addClass("is-active");
    } else {
      $(this).next(".menu").slideUp();
      $(this).removeClass("is-active");
    }
  });

  // swiper фона первого экрана

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

  // Select in Galery

  const element = document.querySelector("#selectgalery");
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholderValue: true,
  });

  // swiper Gallery

  const swiperGallery = new Swiper(".gallery-swiper", {
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    // spaceBetween: 30,

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
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 20,
      },

      1400: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },

      1690: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  // Аккордионы по странам

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

  // TABS
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
        if (width <= 820) {
          $(tabsBtn).on("click", function () {
            $("html,body").animate({
                scrollTop: $(`[data-target="${path}"]`).offset().top + "px",
              },
              1000
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

  // События: появление скрытиых карточек и исчезновение кнопки

  document.querySelector(".events__btn").addEventListener("click", function () {
    document.querySelector(".events__btn").style.display = 'none';
    document.querySelectorAll(".event").forEach((el) => {
      el.style.display = "block"
    })
  })


  // События: свайпер

  var swiper = new Swiper(".events__swiper", {
    allowTouchMove: false,
    pagination: {
      el: ".events__pagination",
    },
  });

  // Свайпер Publications

  const swiperPublications = new Swiper(".publications-swiper", {
    spaceBetween: 50,
    pagination: {
      el: ".publications-btn__pagination",
      type: "fraction",
      clickable: true,
      slideToClickedSlide: true,
    },
    loop: true,
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
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      920: {
        slidesPerView: 2,
        spaceBetween: 45,
      },

      1600: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1700: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  // Tooltips

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

  // Projects swiper

  const swiperProjects = new Swiper(".projects__swipper-container", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    clickable: true,
    slideToClickedSlide: true,

    loop: true,
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
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      920: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });

  ymaps.ready(init);

  function init() {
    // Создание карты.
    const myMap = new ymaps.Map(
      "map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758747, 37.601187],
        controls: [],
        // autoFitToViewport: "always",
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
      }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        // autoFitToViewport: 'always'
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
    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }

  // Валидация формы обратной связи
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
          if (name === "[A-Za-zА-Яа-яЁё]") {
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
