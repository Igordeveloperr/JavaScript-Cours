// объявляю родительский класс
class Animal{
    constructor(name){this.name = name; this.speed = 0;}
    // методы
    run(speed){
        this.speed = speed;
        speed > 50 ? console.log("stayed alive!") : console.log("keeps running");
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} остановился.`);
    }
}

// наследуюсь от родительского класса
class Rabbit extends Animal{
    // перегрузка метода родительского класса
    stop(){
        this.speed = 0;
        console.log(`${this.name} остановился. Уснул.`);
    }
}

// создаю объект (кроль)
let rabbit = new Rabbit("Кроль");

// вызываю методы объекта rabbit
rabbit.run(20);
rabbit.stop();