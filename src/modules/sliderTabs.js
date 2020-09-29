"use strict";

class SliderCaruselTab {
  constructor({
    main,
    wrap,
    next,
    prev,
    removes = false,
    position = 0,
    width = 0,
    padding = 0,
    addap = 0,
    addap2 = 0,
  }) {
    if (!main || !wrap) {
      console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.options = {
      position,
      width,
      padding,
      removes,
      addap,
      addap2,
    };
  }

  init() {
    this.addGloClass();
    this.render();


    if (this.prev && this.next) {
      this.constolSlider();
    } else {

      this.constolSlider();
    }
    if (this.responsive) {
      this.responseInit();
    }
  }

render(){
  if (innerWidth > 768) {
    this.options.addap = 0;
  }
  window.addEventListener("resize", () => {
    if (innerWidth <= 768) {
      this.options.addap = this.options.addap2;
    }
    if(innerWidth > 768){
      this.options.addap = 0;
    }
   this.options.width = 0;
   this.options.position = 0;
   this.wrap.style.transform = `translateX(${this.options.width}px)`;
   if (this.options.removes) {
     this.prev.style.display = "none";
     this.next.style.display = "flex";
   }

  });
}

  addGloClass() {
    this.main.classList.add("glo-slider-tab");
    this.wrap.classList.add("glo-slider__wrap-tab");
  }

  constolSlider() {

    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }

  prevSlider() {
    this.options.position--;
    if (this.options.position < 0) {
      this.options.position = 0;

      return;
    }
    this.options.width +=
      this.slides[this.options.position].offsetWidth + this.options.padding;
    this.wrap.style.transform = `translateX(${this.options.width}px)`;
    if (this.options.position < 1 && this.options.removes) {
      this.prev.style.display = "none";
      this.next.style.display = "flex";
    }
  }

  nextSlider() {
    let widthwr =
      (this.wrap.scrollWidth - this.main.offsetWidth) /
      this.slides[this.slides.length - 1].offsetWidth;

    if (this.options.position < Math.round(widthwr) - this.options.addap) {
      this.options.width -=
        (this.slides[this.options.position].offsetWidth + this.options.padding);

      this.wrap.style.transform = `translateX(${this.options.width}px)`;
      this.options.position++;
    }

    if (
      this.options.removes &&
      this.options.position === Math.round(widthwr) - this.options.addap
    ) {
      this.prev.style.display = "flex";
      this.next.style.display = "none";
    }
  }

}


export default SliderCaruselTab