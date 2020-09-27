import maskPhone from "./maskPhone.js";

const feedback = () => {
  const feedbackPhone = document.querySelectorAll("[name='phone']"),
    formAll = document.querySelectorAll("form"),
    linkPrivacy = document.querySelectorAll(".link-privacy"),
    popupPrivacy = document.querySelector(".popup-privacy"),
    close = popupPrivacy.querySelector(".close"),
    buttonHide = document.querySelectorAll(".button.button_wide"),
    popupConsultation = document.querySelector(".popup-consultation"),
    popupThank = document.querySelector(".popup-thank");


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



  formAll.forEach((item) => {
    // обработчик на форму
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const check = e.target.querySelector("[type='checkbox']");
      const succs = () => {
        popupThank.style.visibility = 'visible';
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