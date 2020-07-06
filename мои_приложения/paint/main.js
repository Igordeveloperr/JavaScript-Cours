"use strict";

const canvas = document.querySelector("#canvas"),
      resetBtn = document.querySelector("#resetAll"),
      colors = document.querySelectorAll(".colors div");  
let ctx = canvas.getContext("2d");

function draw(e)
{
    let x = e.offsetX,
        y = e.offsetY;
    ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function chooseColor()
{
    for(let i = 0; i < colors.length; i++)
    {   
        colors[i].addEventListener("click", () => 
        { 
            for(let i = 0; i < colors.length; i++){colors[i].style.border = "none";}
            colors[i].style.border = 2 + "px solid #000";
            let color = colors[i].getAttribute("color");
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
        });
    }
}

chooseColor();
resetBtn.addEventListener("click", () => ctx.clearRect(0, 0, 800, 800));
canvas.addEventListener("mousemove", draw.bind());