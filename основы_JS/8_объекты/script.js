// создаю объект
let options = {
    width: 1920,
    height: 1080,
    name: "desktop"
};
console.log(options.name);

// добавляю новое значение в объект
options.color = "blue";
console.log(options.color);

// добавляю объект в в качестве значения другого объекта
options.settings = {
    screen: "1920X1080",
    git: "active",
};
console.log(options.settings.git);

// добавляю метод в объект
options.openVim = function(){
    console.log("Vim открыт");
};
options.openVim();

// удаление свойств объекта
delete options.name;

// перебор объектов
for(let key in options){
    console.log("Cвойство: " + key + " Значение: " + options[key]);
}

// узнаю кол-во свойств в объекте
console.log(Object.keys(options).length);