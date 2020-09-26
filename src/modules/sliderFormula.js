"use strict";

class SliderCarusel {
  constructor({
    main,
    wrap,
    next,
    prev,
    idStyle,
    deletes,
    removes = false,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    indexx = 1,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      idStyle,
      position,
      deletes,
      infinity,
      removes,
      indexx,
      maxPosition: this.slides.length - this.slidesToShow,
      widthSlide: Math.floor(100 / this.slidesToShow),
    };
    this.responsive = responsive;
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (this.prev && this.next) {
      this.constolSlider();
    } else {
      this.addArrow();
      this.constolSlider();
    }
    if (this.responsive) {
      this.responseInit();
    }
  }

  addGloClass() {
    this.main.classList.add(`glo-slider-${this.options.indexx}`);
    this.wrap.classList.add(`glo-slider__wrap-${this.options.indexx}`);
    for (const item of this.slides) {
      item.classList.add(`glo-slider__item-${this.options.indexx}`);
    }
  }

  removeClasses() {
    if (this.options.removes) {
      console.log(222)
      this.main.classList.remove(`glo-slider-${this.options.indexx}`);
      this.wrap.classList.remove(`glo-slider__wrap-${this.options.indexx}`);
      for (const item of this.slides) {
        item.classList.remove(`glo-slider__item-${this.options.indexx}`);
      }
    }
  }

  addStyle() {
    let style = document.getElementById(this.options.idStyle);
    if (!style) {
      style = document.createElement("style");
      style.id = this.options.idStyle;
    }

    style.textContent = `
    .glo-slider-${this.options.indexx}{
      overflow: hidden !important;
    }
    .glo-slider__wrap-${this.options.indexx}{
      display: flex !important;
      transition: transform 0.5s !important;
      align-items: flex-start !important;
      will-change: transform !important;
      flex-wrap: nowrap !important;
    }
    .glo-slider__item-${this.options.indexx}{
      display: flex !important;
      align-items: center !important;
      justify-content: center;
      flex: 0 0 ${this.options.widthSlide}% !important;

    }
    `;
    document.head.appendChild(style);
  }

  constolSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  nextSlider() {
    if (
      this.options.infinity ||
      this.options.position < this.options.maxPosition
    ) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  addArrow() {
    this.prev = document.createElement("button");
    this.next = document.createElement("button");

    this.prev.className = "glo-slider__prev";
    this.next.className = "glo-slider__next";

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);
    const style = document.createElement("style");
    style.textContent = `
      .glo-slider__prev,
      .glo-slider__next{
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }
      .glo-slider__next {
        border-left-color: #19b5fe
      }
      .glo-slider__prev {
        border-right-color: #19b5fe
      }
      .glo-slider__prev:hover,
      .glo-slider__next:hover,
      .glo-slider__prev:focus,
      .glo-slider__next:focus{
        background: transparent;
        outline: transparent;
      }
    `;

    document.head.appendChild(style);
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allRespone = this.responsive.map((item) => item.breakpoint);
    const maxResponse = Math.max(...allRespone);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allRespone.length; i++) {
          if (widthWindow < allRespone[i]) {
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.options.maxPosition = this.slides.length - this.slidesToShow;
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };

    checkResponse();

    window.addEventListener("resize", () => {
      checkResponse();
      if (innerWidth >= this.options.deletes) {
        this.removeClasses();
      }
    });
  }
}

export default SliderCarusel;