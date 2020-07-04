"use strict"; // код работает в современном режиме

const btn = document.querySelector(".btn"),
      btn2 = document.querySelector(".btn2");  

function test(color){this.style.background = color;}

// метод call(context, [arg1, arg2...]) - вызывает функцию с явным указанием на то, что будет являтся контекстом
test.call(btn, "lightblue");
// еще явное указание контекста с помощью call()
btn2.addEventListener("click", () => test.call(btn, "green"));

/*
    метод apply(context, [array]) - вызывает функцию с явным указанием на то, что будет являтся контекстом, но в качестве
    дополнительных аргументов принимает массив
*/
function test1(color, num, date)
{
    this.style.background = color;
    console.log(num, date);
}
test1.apply(btn2, ["green", 34, "12.89.3000"]);

/*
    метод bind(context, [arg1, arg2...]) - создает экземпляры функций с уже привязанным кентекстом
*/
let a = test.bind(btn, "red"),
    b = test.bind(btn2, "orange");

btn2.addEventListener("click", b);

// немного практики
const buttons = document.querySelectorAll(".btn-con button");

function stainBtn(color, borderWidth, borderColor)
{
    this.style.background = color;
    this.style.border = `${borderWidth}px solid ${borderColor}`;
}

for(let i = 0; i < buttons.length; i++)
{ buttons[i].addEventListener("click", stainBtn.bind(buttons[i], "green", 10, "red"));}