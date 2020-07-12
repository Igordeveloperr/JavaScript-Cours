"use strict";

const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.moveTo(250, 50);
ctx.quadraticCurveTo(150, 0 ,100, 50); // рисую кривую, первые два параметра - это точка изкревления
ctx.quadraticCurveTo(0, 150, 150, 150);
ctx.quadraticCurveTo(150,0,100,150);
ctx.stroke();