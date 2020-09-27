import SliderCaruselTab from "./sliderTabs.js";

const design = () =>{

  const popupDesign = document.querySelector(".popup-design");


  const option = {
    main: ".nav-designs.nav-popup",
    wrap: "#nav-list-popup-designs",
    next: "#nav-arrow-popup-designs_right",
    prev: "#nav-arrow-popup-designs_left",
    removes: false,
    width: 0,
    position: 0,
    padding: 17,
    addap: 0,
  };

  const carousel = new SliderCaruselTab(option);
  carousel.init();

  const tabs = () => {
    const tabHeader = document.querySelector(".wrapper_middle"),
      tab = document.querySelectorAll("#designs-list > button"),
      tabContent = document.querySelectorAll(".design-tab-all");

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

      if (target.closest(".link-list-designs")) {
        popupDesign.style.visibility = 'visible';
      }

      if (target.closest(".popup-design .close")){
        popupDesign.style.visibility = "hidden";

      }
       let targetb = target.closest("#designs-list > button");
      if (targetb) {
        tab.forEach((item, i) => {
          if (item === targetb) {
            let num = i + 1;
            toggleTabContent(i);

            slider(i + 1);
          }
        });
      }
    });
  };

  tabs();

// слайдер
  const slider = (i = 1) => {
    let slide = document.querySelectorAll(
        `.designs-slider__style${i} > .designs-slider__style-slide`
      ),
      arrowRight = document.getElementById("design_right"),
      arrowLeft = document.getElementById("design_left"),
      sliderCounter = document.querySelector(
        "#designs-counter > .slider-counter-content > .slider-counter-content__current"
      ),
      sliderCounterTotal = document.querySelector(
        "#designs-counter> .slider-counter-content > .slider-counter-content__total"
      ),
      dotsWrap = document.querySelectorAll("#designs .preview-block");

      dotsWrap.forEach((item) =>{
        item.classList.remove("visible");
      })
      let dots = dotsWrap[i - 1],
        dot = dots.querySelectorAll(".preview-block__item");

        dots.classList.add("visible");

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
    dot.forEach((item, index, arr) => {

      item.addEventListener("click", () => {
        arr.forEach((el) =>{
          el.querySelector("div").classList.remove("preview_active");
        })
        item.querySelector("div").classList.add("preview_active");
        slide.forEach((item) => {
          item.classList.remove("item-active-slider");
        });
        slide[index].classList.add("item-active-slider");


      });
    });

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

    window.addEventListener('resize', () =>{
      currentSlide = 0;
      slide.forEach((item) => {
        item.classList.remove("item-active-slider");
      });
      slide[0].classList.add("item-active-slider");

      countSlider();
    })
  };
  slider();

  // табы попап

    const tabsPopup = () => {
      const tabHeader = document.querySelector(".wrapper_middle"),
        tabPop = document.querySelectorAll("#nav-list-popup-designs > button"),
        tabContentPop = document.querySelectorAll(".popup-design-all"),
        tabContentTextPop = document.querySelectorAll(".popup-design-text");

      let  sliderCounter = document.querySelector(
          "#popup-designs-counter> .slider-counter-content > .slider-counter-content__current"
        ),
        sliderCounterTotal = document.querySelector(
          "#popup-designs-counter> .slider-counter-content > .slider-counter-content__total"
        );


        // const countSlider = () => {
        //   sliderCounter.textContent = currentSlide + 1;
        // };
        // countSlider();

      const toggleTabContent = (index) => {
        for (let i = 0; i < tabContentPop.length; i++) {
          if (index === i) {
            tabPop[i].classList.add("active");
            tabContentPop[i].classList.remove("d-none");
            tabContentTextPop[i].classList.add("visible-content-block");
            sliderCounterTotal.textContent = tabContentPop[i].children.length;
            sliderCounter.textContent = 1;
          } else {
            tabContentPop[i].classList.add("d-none");
            tabPop[i].classList.remove("active");
            tabContentTextPop[i].classList.remove("visible-content-block");
          }
        }
      };
      document.body.addEventListener("click", (event) => {
        let target = event.target;

       let targetb = target.closest("#nav-list-popup-designs > button");
        if (targetb) {
          tabPop.forEach((item, i) => {
            if (item === targetb) {
              let num = i + 1;
              toggleTabContent(i);

              sliderPop(i + 1);
            }
          });
        }
      });
    };

    tabsPopup();

    const optionPop = {
      main: ".nav-designs",
      wrap: "#designs-list",
      next: "#nav-arrow-designs_right",
      prev: "#nav-arrow-designs_left",
      removes: false,
      width: 0,
      position: 0,
      padding: 17,
      addap: 0,
    };

    const carouselPop = new SliderCaruselTab(optionPop);
    // carouselPop.init();

    //popup слайдер

    const sliderPop = (i = 1) => {
      let slide = document.querySelectorAll(
          `.popup-designs-slider__style${i} > .popup-design-slider__style-slide`
        ),
        arrowRight = document.getElementById("popup_design_right"),
        arrowLeft = document.getElementById("popup_design_left"),
        sliderCounter = document.querySelector(
          "#popup-designs-counter> .slider-counter-content > .slider-counter-content__current"
        ),
        sliderCounterTotal = document.querySelector(
          "#popup-designs-counter> .slider-counter-content > .slider-counter-content__total"
        ),
        tabPop = document.querySelectorAll("#nav-list-popup-designs > button");


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
    sliderPop();

}

export default design;