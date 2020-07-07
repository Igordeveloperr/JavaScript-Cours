"use strict"; //код работает в современном режиме

const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d"),
    pi = Math.PI;

// рисование круга
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#34495e";
ctx.fillStyle = "#2980b9";
// arc(x, y, r, начальный угол, конечный угол, false:почасовой || true:против часовой)
ctx.arc(150, 100, 100, 0, 2*pi, false); // рисую дугу
ctx.fill();
ctx.stroke();
ctx.closePath();

// еще круг
ctx.beginPath();
ctx.strokeStyle = "#16a085";
ctx.fillStyle = "#27ae60";
ctx.arc(270, 100, 50, 0, 2*pi, true);
ctx.fill();
ctx.stroke();
ctx.closePath();

// анимация
canvas.addEventListener("mousemove", (e)=>
{
    let x = e.offsetX;
    ctx.beginPath();
    ctx.fillStyle = "#8e44ad";
    ctx.clearRect(0,0,800,400);
    ctx.arc(400, 200, Math.abs(x-200), 0, 2*pi, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
});