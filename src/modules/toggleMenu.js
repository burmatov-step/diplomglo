const toggleMenu = () => {
  const headPhoneNumAccord = document.querySelector(
      ".header-contacts__phone-number-accord"
    ),
    headPhoneNumAccordLink = headPhoneNumAccord.querySelector(
      ".header-contacts__phone-number"
    ),
    headerContactsArrow = document.querySelector(".header-contacts__arrow"),
    menuIcon = document.querySelector(".menu__icon"),
    popupDialogMenu = document.querySelector(".popup-dialog-menu"),
    blockSections = document.querySelectorAll(".block-sections"),
    popupRepairTypes = document.querySelector(".popup-repair-types"),
    popupMenu = document.querySelector(".popup-menu");


    let first = 645;
    let second = 0;
  // Добавление номера
  const addNumber = () => {
    headPhoneNumAccordLink.style.opacity = "1";
    headPhoneNumAccord.style.top = "24px";
    headerContactsArrow.style.transform = "rotateX(180deg)";
  };

  // удаление номера
  const delNumber = () => {
    headPhoneNumAccordLink.style.opacity = "0";
    headPhoneNumAccord.style.top = "0px";
    headerContactsArrow.style.transform = "rotateX(0deg)";
  };

  // Функция скроллтнга
  const scrollTo = (elem) => {
    window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: "smooth",
    });
  };



  // window.addEventListener('resize', () =>{
  //   if (innerWidth <= 575) {
  //   first = 0;
  //   second = 100;
  // }

  // })

  document.body.addEventListener("click", (e) => {

    const target = e.target;

    if (target.closest(".close")){
      popupRepairTypes.style.visibility = "hidden";
    }
      if (target.closest(".header-contacts__arrow")) {
        // При клике на стрелку выезжает и уезжает номер
        headerContactsArrow.classList.toggle("active");
        headerContactsArrow.classList.contains("active")
          ? addNumber()
          : delNumber();
      }

    // при клике на меню, выезжает меню
    if (target === menuIcon) {
      popupMenu.style.visibility = "visible";
      popupDialogMenu.classList.add("open-menu-popup");
      popupMenu.style.opacity = "1";
    }

    if (target.closest(".close-menu")) {
      popupMenu.style.visibility = "hidden";
      popupDialogMenu.classList.remove("open-menu-popup");
      popupMenu.style.opacity = "0";
      popupMenu.style.transition = '1s'
    }
    if (
      target.closest(".popup-menu-nav__item") ||
      target.closest(".link-list-menu") ||
      target.closest(".button-footer")
    ) {
      // закрытие меню при клике на ссылки в меню
      e.preventDefault();
      popupDialogMenu.classList.remove("open-menu-popup");
      popupMenu.style.opacity = "0";

    }
    // плавный скролл
    blockSections.forEach((item) => {
      if (`#${item.id}` === target.hash) {
        scrollTo(item);
      }
    });

    // открытие полного списка услуг и цен
    if (target.closest(".link-list")) {
      e.preventDefault();
      popupRepairTypes.style.visibility = "visible";
    }
  });
};

export default toggleMenu;
