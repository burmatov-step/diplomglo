import SliderCarusel from "./sliderFormula.js";

const formula = () => {
  const formulaItem = document.querySelectorAll(".formula-item__icon");

  formulaItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const info = item.querySelector(".formula-item-popup"),
        heightDown = item.nextElementSibling.clientHeight;
        item.classList.add("active-item");


      if (info.getBoundingClientRect().top < 0) {
        item.parentElement.style.zIndex = "2";
        item.style.zIndex = "2";
        info.style.visibility = "visible";
        info.style.opacity = "1";
        info.style.top = `calc(110% + ${heightDown}px)`;
        info.classList.add("rotate-popup");

      } else {
        item.parentElement.style.opacity = "1";
        info.style.visibility = "visible";
        info.style.opacity = "1";
        item.parentElement.style.zIndex = "1";
      }
    });
    item.addEventListener("mouseout", () => {
      const info = item.querySelector(".formula-item-popup");
      item.classList.remove("active-item");
      info.style.visibility = "hidden";
      info.style.opacity = "0";
      info.style.top = "";
      info.classList.remove("rotate-popup");
      item.parentElement.style.zIndex = "1";
      if (item.parentElement.classList.contains("formula-slider__slide")) {
        item.parentElement.style.opacity = "0.4";
      }
    });
  });

  // Подключение слайдера

  const option = {
    main: ".formula-slider-wrap",
    wrap: ".formula-slider",
    slidesToShow: 4,
    next: ".slider-arrow_right-formula.slider-arrow_right",
    prev: ".slider-arrow_left-formula.slider-arrow_left",
    infinity: true,
    idStyle: "sliderCarousel-style",
    deletes: 1024,
    indexx: 1,
    responsive: [
      {
        breakpoint: 1024,
        slideToShow: 3,
      },
      {
        breakpoint: 768,
        slideToShow: 2,
      },
      {
        breakpoint: 576,
        slideToShow: 1,
      },
    ],
  };

  const carousel = new SliderCarusel(option);

  if (innerWidth >= 1025) {
    window.addEventListener("resize", () => {
      if (innerWidth < 1025) {
        carousel.init();
      }
    });
  } else {
    carousel.init();
  }
};

export default formula;