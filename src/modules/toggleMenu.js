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

    // При клике на стрелку выезжает и уезжает номер
    if (target.closest(".header-contacts__arrow")) {
      headerContactsArrow.classList.toggle("active");
      headerContactsArrow.classList.contains("active")
        ? addNumber()
        : delNumber();
    }

    // при клике на меню, выезжает меню
    if (target === menuIcon) {
      popupMenu.style.visibility = "visible";
      popupDialogMenu.style.transform = "translate3d(0,0,0)";
    }
    console.log(target.closest(".close-menu"));
    if (target.closest(".close-menu")) {
      popupMenu.style.visibility = "hidden";
      popupDialogMenu.style.transform = "translate3d(645px,0,0)";
    }
    if (
      target.closest(".popup-menu-nav__item") ||
      target.closest(".link-list-menu") ||
      target.closest(".button-footer")
    ) {
      // закрытие меню при клике на ссылки в меню
      e.preventDefault();
      popupDialogMenu.style.transform = "translate3d(645px,0,0)";
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
