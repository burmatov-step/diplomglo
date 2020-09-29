import SliderCarusel from "./sliderFormula.js";

const problems = () =>{

  const formulaItem = document.querySelectorAll(".problems-item__icon");

  formulaItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const info = item.querySelector(".problems-item-popup"),
        heightDown = item.nextElementSibling.clientHeight;
      item.parentElement.classList.add("active-item");
      // item.classList.add("active-item");

      // console.dir(parentElement);

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
      item.parentElement.classList.remove("active-item");
      item.classList.remove("active-item");
      const info = item.querySelector(".problems-item-popup");
      info.style.visibility = "hidden";
      info.style.opacity = "0";
      info.style.top = "";
      info.classList.remove("rotate-popup");
      item.parentElement.style.zIndex = "1";
      if (item.parentElement.classList.contains("problems-slider__slide")) {
        item.parentElement.style.opacity = "0.5";
      }
    });
  });

  // подключение слайдера

    const option = {
      main: ".problems-slider-wrap",
      wrap: ".problems-slider",
      slidesToShow: 1,
      next: "#problems-arrow_right",
      prev: "#problems-arrow_left",
      infinity: true,
      idStyle: "sliderCarousel-problem",
      deletes: 1024,
      indexx: 5,
      responsive: [
        {
          breakpoint: 1024,
          slideToShow: 1,
        },
        // {
        //   breakpoint: 768,
        //   slideToShow: 2,
        // },
        // {
        //   breakpoint: 576,
        //   slideToShow: 1,
        // },
      ],
    };

    const carousel = new SliderCarusel(option);
    carousel.init()
}

export default problems;