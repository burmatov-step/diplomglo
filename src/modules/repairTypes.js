import SliderCaruselTab from "./sliderTabs.js";

const repairTypes = () => {
  const slider = (i = 1) => {
    let slide = document.querySelectorAll(
        `.types-repair${i} > .repair-types-slider__slide`
      ),
      arrowRight = document.getElementById("repair-types-arrow_right"),
      arrowLeft = document.getElementById("repair-types-arrow_left"),
      sliderCounter = document.querySelector(
        ".slider-counter-content__current"
      ),
      sliderCounterTotal = document.querySelector(
        ".slider-counter-content__total"
      );

    if (!slide[0].classList.contains("item-active-slider")) {
      slide[0].classList.add("item-active-slider");
    }

    for (let i = 1; i < slide.length; i++) {
      slide[i].classList.remove("item-active-slider");
    }

    let currentSlide = 0;

    sliderCounterTotal.textContent = slide.length;
    const countSlider = () => {
      sliderCounter.textContent = currentSlide + 1;
    };
    countSlider();

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    arrowRight.addEventListener("click", () => {
      if (currentSlide < slide.length - 1) {
        currentSlide++;
        nextSlide(slide, currentSlide, "item-active-slider");
      }
      countSlider();
    });

    arrowLeft.addEventListener("click", () => {
      if (currentSlide > 0) {
        prevSlide(slide, currentSlide, "item-active-slider");
        currentSlide--;
      }
      countSlider();
    });
  };
  slider();

  const tabs = () => {
    const tabHeader = document.querySelector(".wrapper_middle"),
      tab = document.querySelectorAll(".repair-types-nav__item"),
      tabContent = document.querySelectorAll(".types-repairAll");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tabContent[i].classList.add("d-none");
          tab[i].classList.remove("active");
        }
      }
    };
    document.body.addEventListener("click", (event) => {
      let target = event.target;

      target = target.closest(".repair-types-nav__item");
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            let num = i + 1;
            toggleTabContent(i);

            slider(i + 1);
          }
        });
      }
    });
  };

  tabs();

  const option = {
    main: ".nav-wrap-repair",
    wrap: ".nav-list-repair",
    next: "#nav-arrow-repair-right_base",
    prev: "#nav-arrow-repair-left_base",
    removes: false,
    width: 0,
    padding: 10,
    position: 0,
    addap: -1,
    addap2: -1,
  };

  const carousel = new SliderCaruselTab(option);

  if (innerWidth > 1024) {
    window.addEventListener("resize", () => {
      if (innerWidth <= 1024) {
        carousel.init();
      } else{

      }
    });
  } else {
    carousel.init();
  }
};

export default repairTypes;




