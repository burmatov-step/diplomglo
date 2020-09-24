import SliderCarusel from "./sliderFormula.js";

const portfolio = () =>{
    const option = {
      main: ".wrapper_middle",
      wrap: ".portfolio-slider-wrap",
      slidesToShow: 2.5,
      next: "#portfolio-arrow_right",
      prev: "#portfolio-arrow_left",
      infinity: true,
      removes: true,
      responsive: [
        {
          breakpoint: 1024,
          slideToShow: 2,
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
    // carousel.init();
}

export default portfolio;