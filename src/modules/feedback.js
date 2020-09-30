import maskPhone from "./maskPhone.js";

const feedback = () => {
  const feedbackPhone = document.querySelectorAll("[name='phone']"),
    formAll = document.querySelectorAll("form"),
    linkPrivacy = document.querySelectorAll(".link-privacy"),
    popupPrivacy = document.querySelector(".popup-privacy"),
    close = popupPrivacy.querySelector(".close"),
    buttonHide = document.querySelectorAll(".button.button_wide"),
    popupConsultation = document.querySelector(".popup-consultation"),
    popupThank = document.querySelector(".popup-thank"),
    popName = document.querySelectorAll('[name="name"]');


  feedbackPhone.forEach((e) => {
    maskPhone(e);
  });
  // функция запроса
  const postData = (body) => {
    return fetch("server.php", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(body),
    });
  };

  // Открытие окна политики конфиденц...
  linkPrivacy.forEach((item) => {
    item.addEventListener("click", () => {
      popupPrivacy.style.visibility = "visible";
      document.documentElement.classList.add("overflov");
    });
  });

  close.addEventListener("click", () => {
    popupPrivacy.style.visibility = "hidden";
  });

  document.body.addEventListener('click', (e) =>{
    let target = e.target;

    if(target.closest('.button.button_wide')){
      popupConsultation.style.visibility = "visible";
    }

    if (target.closest(".close-consultation")) {
      popupConsultation.style.visibility = "hidden";
    }

    if (target.closest(".close-thank")) {
      popupThank.style.visibility = "hidden";
    }
  })




  popName.forEach((item) => {
    item.addEventListener('input', (e) =>{
e.target.value = e.target.value.match(/[а-яА-Я ]*/);
    })
  });

  formAll.forEach((item) => {
    // обработчик на форму
    item.addEventListener("submit", (e) => {
   const input = item.querySelectorAll("input");
      e.preventDefault();
      const check = e.target.querySelector("[type='checkbox']");
      const succs = () => {
        popupThank.style.visibility = 'visible';
        setTimeout(() => {
          popupThank.style.visibility = "hidden";
        }, 4000);

      };
      if (check.checked) {
        const formData = new FormData(item);
        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });
        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("status network not 200");
            }
            succs();
            input.forEach((e) => {
              e.value = "";
            });
          })
          .catch((error) => {
            console.log(error);
          });


      } else{
        const errorMess = document.createElement('div');
        errorMess.style.fontSize = "14px";
        errorMess.textContent = 'Дайте согласие на обработку данных';
        errorMess.style.color = 'red'
        item.appendChild(errorMess)
        setTimeout(() => {
          item.removeChild(errorMess);
        }, 1000);
      }
    });
  });
};

export default feedback;