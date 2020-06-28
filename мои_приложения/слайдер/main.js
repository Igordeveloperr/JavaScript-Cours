"use strict" // код работает в современном режиме

class Slider
{   
    #prevBtn = document.querySelector("#prev");
    #nextBtn = document.querySelector("#next");
    constructor()
    {
        this._imgArr = document.querySelectorAll(".slider .slids div");
        this.slideMoveRight();
    }
    slideMoveRight()
    {
        for(let i = 0; i < this._imgArr.length; i++)
        {
            this.#nextBtn.addEventListener("click", () => 
            {
                this._imgArr[i].style.marginRight = 800 + "px";
            });      
        }
    }
}

const slider = new Slider();
