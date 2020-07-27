/*
    Паттерн заключается в использовании одного объекта, как прототипа(скелета),
    для создания других объектов
*/

// наш прототип
const car = {
    wheels: 4,
    init(){
        console.log(`I have ${this.wheels}, my owner: ${this.owner}`);
    }
}

// объект, который создается с помощью нашего прототипа
const carWithOwner = Object.create(car, {
    owner: {
        value: "Igor"
    }
});

carWithOwner.init();