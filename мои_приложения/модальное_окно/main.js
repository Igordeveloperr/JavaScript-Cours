"use strict"; // code is working in modern mode

const btn = document.querySelector("button"),
      closeBtn = document.querySelector(".close"),
      modal_window = document.querySelector(".modal_window");  

btn.addEventListener("click", showWindow)
closeBtn.addEventListener("click", closeWindow)

function showWindow(){modal_window.style.display = "block";}
function closeWindow(){modal_window.style.display = "none";}
window.addEventListener("click", (e) => {if(e.target == modal_window){modal_window.style.display = "none";}});
