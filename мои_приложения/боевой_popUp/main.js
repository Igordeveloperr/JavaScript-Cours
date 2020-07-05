"use strict" // this code is working in modern mode

const btn = document.querySelector("button"),
      closeBtn = document.querySelector("#close"),
      popUp = document.querySelector(".pop_up");
      
btn.addEventListener("click", () => popUp.style.top = 0 + "%");
function closePopUp(e){if(e.target == popUp || e.target == closeBtn){popUp.style.top = -100 + "%";}}
closeBtn.addEventListener("click", closePopUp.bind());
popUp.addEventListener("click", closePopUp.bind());