// rest
avarege = (...arr) => arr; // ...arr - означает, что мы можем передать какое угодно кол-во значений и они все будут положены в массив arr
console.log(avarege(10,20,30,50))

// spread
const array = [1,2,3,5,8,13];
console.log(...array); // ... - разварачивает каждое значение массива

// дистругтуринг
const [a,b, ...other] = array;
console.log(a,b, other);

// с объектами
const address = {
    country: "Russia",
    city: "Moscow",
    concat: function(){ return `${this.country}; ${this.city}`;}
}
console.log(address.concat());

const {city, country} = address;
console.log(city, country);