const citiesRussia = ["Москва", "Питер", "Казань"]
const citiesEurope = ["Париж", "Лондон", "Нью-Йорк"]

// оператор Spread - ...
console.log(...citiesRussia)

// объеденяю массивы
const allCities = [...citiesRussia, ...citiesEurope]
console.log(allCities)

// работа с объектами
const citiesRussiaPopulation = {
    moscow: 20,
    piter: 9,
    kazan: 14
}

const citiesEuropePopulation = {
    paris: 23,
    london: 19,
    new_york: 18
}

console.log({...citiesRussiaPopulation})
// объеденяю объекты
const allPopulation = {...citiesRussiaPopulation, ...citiesEuropePopulation}

console.log(allPopulation)

// практика
const number = [1, 2, 3, 4]
console.log(Math.max(...number))

// оператор Rest
const arr = [1,2,3]

function sum(...args){
    console.log(...args)
}

console.log(sum(arr))

const [a, b, ...other] = arr
console.log(a, b, other)