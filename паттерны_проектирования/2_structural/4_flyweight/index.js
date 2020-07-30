"use strict";

/*
    Паттерн позволяет эфективно работать с
    данными, через различные типы объектов
*/ 

class Car {
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
}

class CarFactory{
    constructor(){
        this.cars = [];
    }

    create(model, price){
        const candidate = this.getCar(model);
        if(candidate){
            return candidate;
        }
        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model){
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();

const audi = factory.create("a-8", 8000);
console.log(audi);

const bmw = factory.create("bmw", 1000);
console.log(bmw);

const bmwX3 = factory.create("bmw", 4000);
console.log(bmwX3);