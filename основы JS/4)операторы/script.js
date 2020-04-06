"use strict";

// конкотенация 
console.log("hello" + " " + "world!"); // string
console.log("age =" + " " + 24); // string
// унарный плюс
// let age = +prompt("You'r age");
// console.log(age); // получим int, а не string из-за унарного плюса перед prompt
//
let incr = 10,
    decr = 10;

console.log(++incr); // инкримент
console.log(--decr); // дикремент
// сравнение
console.log("4" == 4); // сравниваем только значение, вернет true
console.log("4" === 4); // сравниваем значение и типы данных, вернет false
// логические операторы
let a = true,
    b = false;
console.log(a && b); // логическое И
console.log(a || b); // логическое ИЛИ
console.log(!a); // логическое отрицание