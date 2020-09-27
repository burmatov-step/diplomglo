import SliderCaruselTab from "./sliderTabs.js";

const scheme = () =>{
// слайдер для заголовка
   const option = {
     main: ".scheme > .wrapper > .nav-wrap > .nav",
     wrap: "#scheme-list",
     next: "#nav-arrow-scheme_right",
     prev: "#nav-arrow-scheme_left",
     removes: false,
     width: 0,
     position: 0,
     padding: 14,
     addap: 0,
   };

   const carousel = new SliderCaruselTab(option);
   carousel.init();

  //  таб

   const tabs = () => {
     const tabHeader = document.querySelector("#scheme-list"),
       tab = document.querySelectorAll(".scheme-nav__item"),
       tabContent = document.querySelectorAll(".scheme-slider__slide"),
       tabContentText = document.querySelectorAll(".scheme-description-block");

     const toggleTabContent = (index) => {
       for (let i = 0; i < tabContent.length; i++) {
         if (index === i) {
           tabContentText[i].classList.add("visible-content-block");
           tab[i].classList.add("active");
           tabContent[i].classList.remove("d-none");
         } else {
           tabContent[i].classList.add("d-none");
           tab[i].classList.remove("active");
           tabContentText[i].classList.remove("visible-content-block");
         }
       }
     };
     document.body.addEventListener("click", (event) => {
       let target = event.target;

      let targetd = target.closest(".scheme-nav__item");
       if (targetd) {
         tab.forEach((item, i) => {
           if (item === target) {
             let num = i + 1;
             toggleTabContent(i);

            //  slider(i + 1);
           }
         });
       }
     });
   };

   tabs();

};

export default scheme;