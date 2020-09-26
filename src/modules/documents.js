import SliderCarusel from "./sliderFormula.js";

const documents = () =>{
  const docPopup = document.querySelector(".popup-transparency");

const option = {
  main: ".transparency-slider-wrap",
  wrap: ".transparency-slider",
  slidesToShow: 1,
  next: "#transparency-arrow_right",
  prev: "#transparency-arrow_left",
  infinity: false,
  removes: true,
  idStyle: "sliderCarousel-styles",
  deletes: 1091,
  indexx: 2,
  responsive: [
    {
      breakpoint: 1091,
      slideToShow: 1,
    },
  ],
};

const carousel = new SliderCarusel(option);
if (innerWidth < 1091) {
  carousel.init();
}

document.body.addEventListener('click', (e) =>{
   let target = e.target;
if (target.closest(".transparency-item__img")) {

  docPopup.style.visibility = "visible";
}
if (target.closest(".popup-transparency .close")) {
  docPopup.style.visibility = "hidden";
}
})
window.addEventListener("resize", (e) => {

  if (innerWidth < 1091) {
    carousel.init();
  }


});

const slider = (i = 1) => {
  let slide = document.querySelectorAll(`.popup-transparency-slider__slide`),
    arrowRight = document.getElementById("transparency_right"),
    arrowLeft = document.getElementById("transparency_left"),
    sliderCounter = document.querySelector(
      "#transparency-popup-counter> .slider-counter-content > .slider-counter-content__current"
    ),
    sliderCounterTotal = document.querySelector(
      "#transparency-popup-counter> .slider-counter-content > .slider-counter-content__total"
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


}

export default documents;