const toggleMenu = () => {
  const headPhoneNumAccord = document.querySelector(
      ".header-contacts__phone-number-accord"
    ),
    headPhoneNumAccordLink = headPhoneNumAccord.querySelector(
      ".header-contacts__phone-number"
    ),
    headerContactsArrow = document.querySelector(".header-contacts__arrow"),
    popupDialogMenu = document.querySelector(".popup-dialog-menu"),
    blockSections = document.querySelectorAll(".block-sections"),
    popupRepairTypes = document.querySelector(".popup-repair-types"),
    popupMenu = document.querySelector(".popup-menu");

    popupMenu.style.opacity = "0";
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

  document.body.addEventListener("click", (e) => {

    const target = e.target;

    if (target.closest(".close")){
      popupRepairTypes.style.visibility = "hidden";
      document.documentElement.classList.remove("overflov");
    }
      if (target.closest(".header-contacts__arrow")) {
        // При клике на стрелку выезжает и уезжает номер
        headerContactsArrow.classList.toggle("active");
        headerContactsArrow.classList.contains("active")
          ? addNumber()
          : delNumber();
      }

    // при клике на меню, выезжает меню
    if (
      target.closest(".menu__icon")
    ) {
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
      popupMenu.style.visibility = "hidden";

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
      document.documentElement.classList.add("overflov");

    }
  });
};

export default toggleMenu;
