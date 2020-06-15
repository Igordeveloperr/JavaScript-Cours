let div4 = document.querySelector("#four4"),
    p = div4.querySelectorAll("p"), // ищу параграф в диве !!!возвращает массив
    div = document.querySelectorAll("div"),
    firstDiv = document.querySelector("div");
//----------------- получаю елементы, которые вложены в div
let child = firstDiv.children; // массив
console.log(child);

let link = document.querySelector("div a");
console.log(link.parentElement); // получаю родительский блок