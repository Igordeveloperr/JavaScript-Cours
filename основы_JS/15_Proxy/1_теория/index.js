"use strict";

// объекты
const person = {
    name: "Igor",
    age: 25,
    job: "Frontend dev"
};

// проксируем объекты
/*
    В конструктор передаем 2 параметра
    1 - это сущность, с которой мы работаем(объект, функция и тд)
    2 - это методы, которые позволяют сделать ловушки для нашей сущности
*/ 
const objProxy = new Proxy(person, {
    // метод get
    get(target, prop){
        console.log("Target: ", target);
        console.log("Prop: ", prop);
        return target[prop];
    },

    // метод set
    set(target, prop, value){
        if(prop in target){
            target[prop] = value;
        }
        else{
            throw new Error(`No property: ${prop} in object`);
        }
    },

    // has - проверяет наличие ключа в объекте, если он есть, то возвращает true
    has(target, prop){
        if(prop in target){
            return true;
        }
        return false;
    },
    // deleteProperty - удаляет свойство из объекта 
    deleteProperty(target, prop){
        console.log("Deleting: ", prop);
        delete target[prop];
        return true;
    }
});

// Функции
// проксируем функции
const log = txt => `Log: ${txt}`;

const funcProxy = new Proxy(log, {
    // apply - отслеживает, когда вызывается функция
    apply(target, thisArg, args){
        console.log(`Colling fn....`);
        return target.apply(thisArg, args);
    }
});

// Классы
// проксирование классов
class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    // отслеживаю создание нового объекта
    construct(target, args){
        console.log("New obj");
        return new target(...args);
    },
});

const p = new PersonProxy("Igor", 25);