const product = {
    name: "Shue",
    cost: 100,
}
const template = `<h1>${product.name}</h1>`; // новая конкотенация с помощью конструкции ${}
console.log(template);

// методы строк
const str = "hello";
console.log(str.startsWith("he")); // проверяет с чего начинается строка
console.log(str.endsWith("o")); // проверяет как заканчивается строка
console.log(str.includes("ell")); // ищет подстроку в строке
console.log(str.repeat(3)); // дублирует строчку n кол-во раз
console.log(str.padStart(10, "_")); // задает минимальную длину строки
