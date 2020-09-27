"use strict";

import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import elementClosest from 'element-closest'
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

import toggleMenu from "./modules/toggleMenu";
import feedback from "./modules/feedback";
import formula from "./modules/formula";
import repairTypes from "./modules/repairTypes.js";
import portfolio from "./modules/portfolio.js";
import design from "./modules/design.js";
import documents from "./modules/documents.js";
import reviews from "./modules/reviews.js";
import partners from "./modules/partners.js";
import problems from "./modules/problems.js";
import scheme from "./modules/scheme.js";
import accordion from "./modules/accordion.js";
import repairPopup from "./modules/repairPopup.js";

toggleMenu();

// Отправка формы
feedback();

// формула успешности
formula();

// Виды работы
repairTypes();

// Портфолио

portfolio();

// документы
documents()

// дизайн
design();


// отзывы
reviews();

// партнеры

partners();

// проблемы

problems();

// как мы работаем

scheme()

// аккордион

accordion();

// подгрузка из db

repairPopup();



// const portfolioSlide = document.getElementById("portfolio"),
//   popupPortfolio = document.querySelector(".popup-portfolio");
// portfolioSlide.addEventListener("click", (e) => {
//   let target = e.target;
//   console.log(target);
//   if (target.closest(".portfolio-slider__slide-frame")) {
//     popupPortfolio.style.visibility = "visible";
//   }
// });