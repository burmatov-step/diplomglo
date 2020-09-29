import SliderCarusel from "./sliderFormula.js";


const partners = () =>{
const option = {
  main: ".partners > .wrapper",
  wrap: ".partners-slider",
  slidesToShow: 3,
  next: "#partners-arrow_right",
  prev: "#partners-arrow_left",
  infinity: false,
  idStyle: "sliderCarousel-partner",
  indexx: 4,
  responsive: [
    {
      breakpoint: 1025,
      slideToShow: 3,
    },
    {
      breakpoint: 769,
      slideToShow: 2,
    },
    {
      breakpoint: 576,
      slideToShow: 1,
    },
  ],
};

const carousel = new SliderCarusel(option);
carousel.init();
}

export default partners;