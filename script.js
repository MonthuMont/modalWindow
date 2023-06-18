"use strict";
const modalWindow = document.querySelectorAll(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelectorAll(".close-modal-window");
const btnShowModalWindow = document.querySelectorAll(".modalBlocks__block");
// console.log(btnShowModalWindow);
for (let i = 0; i < btnShowModalWindow.length; i++) {
  btnShowModalWindow[i].addEventListener("click", function () {
    modalWindow[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
  let closeModalWindow = function () {
    modalWindow[i].classList.add("hidden");
    overlay.classList.add("hidden");
  };
  btnCloseModalWindow[i].addEventListener("click", closeModalWindow);
  overlay.addEventListener("click", closeModalWindow);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalWindow[i].classList.contains("hidden")) {
      closeModalWindow();
    }
  });
}
