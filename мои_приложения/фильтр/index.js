"use strict";

const filterBoxs = document.querySelectorAll(".content-card"),
      nav = document.querySelector("nav");
    
nav.addEventListener("click", e => {
    if(e.target.tagName !== "LI"){return false;}
    let colorData = e.target.getAttribute("data-f");
    
    filterBoxs.forEach(el => {
        el.classList.remove("hide");
        if(el.getAttribute("data-f") !== colorData && colorData !== "all"){
            el.classList.add("hide");
        }
    });
});