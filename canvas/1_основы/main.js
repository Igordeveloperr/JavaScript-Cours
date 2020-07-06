"use strict"; // this code is working in modern mode

// получаю canvas
const canvas = document.querySelector("#canvas");
// получаю контекст canvas
let ctx = canvas.getContext("2d");

// меняю цвет заливки
ctx.fillStyle = "lightblue";
// рисую прямоугольник - fillRect(x, y, width, height)
ctx.fillRect(350, 0, 100, 50);
// стираю все с canvas - clearRect(x, y, width, height)
ctx.clearRect(0, 0, 400, 200);

// простой прямоугольник - rect(x, y, width, height)
ctx.strokeStyle = "lightgreen"; // задаю цвет border
ctx.lineWidth = 10; // задаю ширину линиям
ctx.rect(200, 100, 100, 50); // задаю настройки для рисования
ctx.stroke(); // вызываю отрисовку
ctx.fillStyle = "#27ae60";
ctx.fill(); // заливаю прямоугольник