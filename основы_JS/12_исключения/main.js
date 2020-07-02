"use strict"; // код работает в современном режиме

// за все ошибки отвечает класс Error, в конструктор передается сообщение о ошибке
let error = new Error("произошел тролинг")
console.log(error.message); // получаю свойство message, которое говорит нам о ошибке

// генерация исключения
let calc = function(n)
{
    if(n > 10) throw new Error("n не может быть больше 10");
    console.log(n + 10);
}

// обработка исключений
try{
   calc(90); 
}
catch(e){
   alert(e.message);
}