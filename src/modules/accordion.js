const accordion = () => {
  const li = document.querySelectorAll(".accordion li");



    document.body.addEventListener("click", (e) => {
      let target = e.target;
      let targetText = target.closest(".accordion li");
      if (targetText) {
        li.forEach((item) => {
          let text = item.querySelector("h2");
          text.classList.remove("msg-active");
        });
        targetText.querySelector("h2").classList.add("msg-active");
      }
    });



};

export default accordion;
