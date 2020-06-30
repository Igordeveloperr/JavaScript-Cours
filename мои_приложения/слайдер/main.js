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
        let index = 0;
        return function ()
        {
            this._imgArr[index].style.border
        }
    }
}

const slider = new Slider();
