import SliderCaruselTab from "./sliderTabs.js";

const repairPopup = () => {
  const listRepair = document.querySelector(".nav-list-popup-repair"),
    repairTitle = document.querySelector(
      ".popup-repair-types-content__head-title"
    ),
    repairContent = document.querySelector(".popup-repair-types-content-table"),
    date = document.querySelector(".popup-repair-types-content__head-date");

  const rendList = (response) => {
    response.forEach((item, index) => {
      if (item.title) {
        let buttonRepair = document.createElement("button");
        buttonRepair.classList.add("popup-repair-types-nav__item");
        if (index === 1) {
          buttonRepair.classList.add("active");
        }
        buttonRepair.classList.add("button_o");
        buttonRepair.textContent = item.title;
        listRepair.appendChild(buttonRepair);
      }
    });

  };

  const contentRend = (response) =>{

    repairContent.innerHTML = '';
    let buttonActive = document.querySelector(
      ".popup-repair-types-nav__item.active"
    );

    repairTitle.textContent = buttonActive.textContent;
    date.textContent = response[0].date;
    response.forEach((item) => {
      if (buttonActive.textContent === item.title) {
        const table = document.createElement("table");
        table.classList.add("popup-repair-types-content-table__list");
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        item.priceList.forEach((el) => {
          let tr = document.createElement("tr");
          tr.classList.add("mobile-row");
          tr.innerHTML = `
                      <td class="repair-types-name">
                        ${el.typeService}
                      </td>
                      <td class="mobile-col-title tablet-hide desktop-hide">
                        Ед.измерения
                      </td>
                      <td class="mobile-col-title tablet-hide desktop-hide">
                        Цена за ед.
                      </td>
                      <td class="repair-types-value">${el.units}</sup></td>
                      <td class="repair-types-value">${el.cost} руб.</td>
          `;
          tbody.appendChild(tr);
        });
        repairContent.appendChild(table);
      }
    });
  }


  const postData = (body) => {
    return fetch("./db/db.json", {
      method: "GET",

    });
  };

  postData()
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("status network not 200");
      }
      return response.json();
    })
    .then((response) => {
      rendList(response);
      contentRend(response)

    })

    .catch((error) => {
      console.log(error);
    });


    document.body.addEventListener('click', (e) =>{
      let target = e.target;
      let targetAct = target.closest('.popup-repair-types-nav__item')
      if (targetAct) {
        let listRepaired = document.querySelectorAll(
          ".popup-repair-types-nav__item"
        );
        listRepaired.forEach((item) => {
          item.classList.remove("active");
        });

        targetAct.classList.add("active");
      }

       postData()
         .then((response) => {
           if (response.status !== 200) {
             throw new Error("status network not 200");
           }
           return response.json();
         })
         .then((response) => {
           contentRend(response);
         })

         .catch((error) => {
           console.log(error);
         });
    })

      const option = {
        main: ".nav-wrap-repair",
        wrap: ".nav-list-popup-repair",
        next: "#nav-arrow-popup-repair_right",
        prev: "#nav-arrow-popup-repair_left",
        removes: false,
        width: 0,
        padding: 10,
        position: 0,
        addap: 0,
      };

      const carousel = new SliderCaruselTab(option);
      carousel.init()
};

export default repairPopup;
