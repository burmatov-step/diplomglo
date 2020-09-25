import SliderCaruselTab from "./sliderTabs.js";

const portfolio = () =>{
  const slider = () => {

    let slide = document.querySelectorAll(
        `.portfolio-slider-mobile > .portfolio-slider__slide-frame`
      ),
      arrowRight = document.getElementById("portfolio-arrow-mobile_right"),
      arrowLeft = document.getElementById("portfolio-arrow-mobile_left"),
      sliderCounter = document.querySelector(
        "#portfolio-counter > .slider-counter-content > .slider-counter-content__current"
      ),
      sliderCounterTotal = document.querySelector(
        "#portfolio-counter > .slider-counter-content > .slider-counter-content__total"
      );
      console.log(sliderCounterTotal);

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
const option = {
  main: ".portfolio-slider__wrapper",
  wrap: ".portfolio-slider",
  next: "#portfolio-arrow_right",
  prev: "#portfolio-arrow_left",
  removes: true,
  width: 0,
  position: 0,
  padding: 0,
  addap: 0,
};



const carousel = new SliderCaruselTab(option);


if (innerWidth > 575) {
  carousel.init();
  window.addEventListener("resize", () => {
    if (innerWidth <= 575) {
      slider();
    }
  });
} else {
  slider()
}


// popup

const portfolioSlide = document.getElementById("portfolio"),
  popupPortfolio = document.querySelector(".popup-portfolio");
document.body.addEventListener('click', (e) =>{
 let target = e.target;
   if (target.closest(".portfolio-slider__slide-frame")) {
     popupPortfolio.style.visibility = "visible";
   }
   if (
     target.closest(".popup-portfolio-slider-wrap > .close") ||
     target.closest(".popup-portfolio > .close")
   ) {
     popupPortfolio.style.visibility = "hidden";
   }

})

const sliderPop = () => {
  let slide = document.querySelectorAll(
      `.popup-portfolio-slider > .popup-portfolio-slider__slide`
    ),
    arrowRight = document.getElementById("popup_portfolio_right"),
    arrowLeft = document.getElementById("popup_portfolio_left"),
    sliderCounter = document.querySelector(
      "#popup-portfolio-counter> .slider-counter-content > .slider-counter-content__current"
    ),
    sliderCounterTotal = document.querySelector(
      "#popup-portfolio-counter> .slider-counter-content > .slider-counter-content__total"
    ),
     popText = document.querySelectorAll(".popup-portfolio-text");
  console.log(sliderCounterTotal);

  if (!slide[0].classList.contains("item-active-slider")) {
    slide[0].classList.add("item-active-slider");
    popText[0].style.display = "block";
  }

  for (let i = 1; i < slide.length; i++) {
    slide[i].classList.remove("item-active-slider");
    popText[i].style.display = 'none';
  }

  let currentSlide = 0;
  let textCount = 0

  sliderCounterTotal.textContent = slide.length;
  const countSlider = () => {
    sliderCounter.textContent = currentSlide + 1;
  };
  countSlider();

  const prevSlide = (elem, index, strClass, text) => {
    elem[index].classList.remove(strClass);
    text[textCount].style.display = "none";
    textCount--
    if (textCount >= 0){
      text[textCount].style.display = "block";
    } else{
      textCount = 0
    }
  };

  const nextSlide = (elem, index, strClass, text) => {
    elem[index].classList.add(strClass);
    text[textCount].style.display = "none";
    textCount++;
    if (textCount < popText.length){
      text[textCount].style.display = "block";
    } else{
      textCount = popText.length - 1;
    }

  };

  arrowRight.addEventListener("click", () => {
    if (currentSlide < slide.length - 1) {
      currentSlide++;
      nextSlide(slide, currentSlide, "item-active-slider", popText);
    }
    countSlider();
  });

  arrowLeft.addEventListener("click", () => {
    if (currentSlide > 0) {
      prevSlide(slide, currentSlide, "item-active-slider", popText);
      currentSlide--;
    }
    countSlider();
  });
};
sliderPop()


// popText[2].style.display = 'block'
console.log();

}

export default portfolio;