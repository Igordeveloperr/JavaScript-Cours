"use strict";

const canvas = document.querySelector("#canvas"),
      resetBtn = document.querySelector("#resetAll"),
      color = document.querySelectorAll("#color");  
let ctx = canvas.getContext("2d"),
    myColor = "#000";

canvas.onmousedown = function()
{
    canvas.onmousemove = function(e)
    {
        let x = e.offsetX,
            y = e.offsetY;
        ctx.beginPath();
        ctx.rect(x-15, y-15, 10, 10);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    canvas.onmouseup = function(){canvas.onmousemove = null;}
}

resetBtn.addEventListener("click", () => ctx.clearRect(0, 0, 800, 800));


