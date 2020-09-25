"use strict";


import toggleMenu from "./modules/toggleMenu";
import feedback from "./modules/feedback";
import formula from "./modules/formula";
import repairTypes from "./modules/repairTypes.js";
import portfolio from "./modules/portfolio.js";
import SliderCaruselTab from "./modules/sliderTabs.js";

toggleMenu();

// Отправка формы
feedback();

// формула успешности
formula();

// Виды работы
repairTypes();

// Портфолио

portfolio();


const option = {
  main: ".nav-designs",
  wrap: "#designs-list",
  next: "#nav-arrow-designs_right",
  prev: "#nav-arrow-designs_left",
  removes: true,
  width: 0,
  position: 0,
  padding: 17,
  addap: 0,
};

const carousel = new SliderCaruselTab(option);
carousel.init();


// const portfolioSlide = document.getElementById("portfolio"),
//   popupPortfolio = document.querySelector(".popup-portfolio");
// portfolioSlide.addEventListener("click", (e) => {
//   let target = e.target;
//   console.log(target);
//   if (target.closest(".portfolio-slider__slide-frame")) {
//     popupPortfolio.style.visibility = "visible";
//   }
// });