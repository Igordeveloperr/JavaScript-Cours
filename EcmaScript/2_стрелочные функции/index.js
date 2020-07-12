// обычная функция, которая возводит в куб число
function cube(a){return a**3;}

// стрелочная
const cube1 = a => a**3; // если в функции 1 аргумент, то можно не писать круглые скобки
console.log(cube1(2));

// еще применение стрелочных функций
setTimeout(() => console.log("hello bibis"), 1000);

// работа стрелочных функций с контекстом
function log(){console.log(this);}

const arrowlog = () => console.log(this);

const person = {
    name: "Igor",
    age: 15,
    log: log,
    arrowlog: arrowlog
}
person.log(); // получаем объект в контексте которого была вызвана функция
person.arrowlog(); // получаем пустой объект, который указывает на глобальный объект в NodeJS - global
console.log(global);