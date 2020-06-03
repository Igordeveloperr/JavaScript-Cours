let p = document.createElement("p"); // создаю елемент, а именно параграф
p.innerHTML = "The first element"; // добавляю текст в параграф
p.classList.add("green", "underline"); // добавляю 2 класса параграфу
document.body.appendChild(p); // добавляю параграф на HTML-страницу, а именно вкладываю его в тег body

const wrap = document.querySelector(".wrap");// получаю блок перед которым хочу вывести параграф
/*
    Использую функцию insertBefore, чтобы вставить созданный параграф перед уже существующим блоком
    1 аргумент - созданный елемент, 2 - елемент перед которым нужно вставить созданный елемент
*/
document.body.insertBefore(p, wrap);