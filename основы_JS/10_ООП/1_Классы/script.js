// объявляю класс
class Car{
    // создаю конструктор
    constructor(model, price){
        this.model = model;
        this.price = price;
    }
    // объявляю методы класса
    getCharacteristic(){
        this.price >= 100 ? console.log("speed = 150km/h;") : console.log("speed = 100km/h");
    }
}

// создаю объект
let car = new Car("BMW", 99);

// вызываю метод объекта
car.getCharacteristic();