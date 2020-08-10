// класс Set
const set = new Set([
    1, 3, 5, 7, 7, 7, 3, 67
])
console.log(set)

// методы

// добавляю новый елемент
set.add(10).add(20).add(30)
console.log(set)

// проверяю наличие елемента
console.log(set.has(20))

// узнаю размер объекта set
console.log(set.size)

// удаление елемента
set.delete(1)
console.log(set.size)

// полностью отчищаю объект set
// set.clear()

// получаю все значения объекта set
console.log(set.values())

// практика
function getValues(array){
    return [...new Set(array)]
}

console.log(getValues([1,1,1,2,2,2,4,4,4,6,6,6]))