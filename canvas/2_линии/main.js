"use strict"; // код работает в современном режиме

const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// мини график
ctx.beginPath(); // новый путь
ctx.strokeStyle = "#8e44ad";
ctx.lineWidth = 10;
ctx.moveTo(100, 50);// позиционирую перо - точка от которой я буду рисовать линию: moveTo(x, y)
ctx.lineTo(150, 150);// рисую линию - lineTo(x, y): конечная точка рисования линии 
ctx.stroke(); // вызываю отрисовку
ctx.lineTo(200, 100);
ctx.stroke();
ctx.closePath(); // закрываю путь

// отдельная линия
ctx.beginPath(); // новый путь, чтобы можно было изменить свойства новой линии
ctx.strokeStyle = "#16a085";
ctx.lineWidth = 25;
ctx.moveTo(300, 150);
ctx.lineTo(200, 50);
ctx.lineTo(200, 100);
ctx.lineCap = "round"; // изменяю конечные точки линии
ctx.stroke();
ctx.closePath(); // закрываю путь

// рисую треугольник
ctx.beginPath();
ctx.lineCap = "round";
ctx.strokeStyle = "#3498db";
ctx.lineWidth = 7;
ctx.fillStyle = "#9b59b6";
ctx.moveTo(50, 150);
ctx.lineTo(100, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.fill();
ctx.stroke();
ctx.closePath(); // закрываю путь