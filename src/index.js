"use strict";


import toggleMenu from "./modules/toggleMenu";
import feedback from "./modules/feedback";
import formula from "./modules/formula";
import repairTypes from "./modules/repairTypes.js";
import portfolio from "./modules/portfolio.js";
import SliderCaruselTab from "./modules/sliderTabs.js";
import design from "./modules/design.js";

toggleMenu();

// Отправка формы
feedback();

// формула успешности
formula();

// Виды работы
repairTypes();

// Портфолио

portfolio();


design();


// const portfolioSlide = document.getElementById("portfolio"),
//   popupPortfolio = document.querySelector(".popup-portfolio");
// portfolioSlide.addEventListener("click", (e) => {
//   let target = e.target;
//   console.log(target);
//   if (target.closest(".portfolio-slider__slide-frame")) {
//     popupPortfolio.style.visibility = "visible";
//   }
// });