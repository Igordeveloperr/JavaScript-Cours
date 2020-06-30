"use strict" // код работает в современном режиме

class Slider
{   
    #prevBtn = document.querySelector("#prev");
    #nextBtn = document.querySelector("#next");
    constructor()
    {
        this._imgArr = document.querySelectorAll(".slider .slids div");
        this.moveRight = this.slideMoveRight();
        this.moveRight();
    }
    slideMoveRight()
    {
        let index = 0;
        return function()
        {
            this.#nextBtn.addEventListener("click", () => 
            {   
                if(index >= this._imgArr.length)
                {
                    console.log("full");
                    return false;
                }
                else
                {
                    this._imgArr[index].style.border = 2 + "px solid gold";
                    index++;
                }
                
            });
        }
    }
}

const slider = new Slider();
