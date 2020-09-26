
import SliderCarusel from "./sliderFormula.js";
const reviews = () =>{
    const option = {
      main: ".reviews-slider-wrap-wrap",
      wrap: ".reviews-slider",
      slidesToShow: 1,
      next: "#reviews-arrow_right",
      prev: "#reviews-arrow_left",
      infinity: true,
      idStyle: "sliderCarousel-styless",
      indexx: 3,
    };

    const carousel = new SliderCarusel(option);
    carousel.init();
}

export default reviews;