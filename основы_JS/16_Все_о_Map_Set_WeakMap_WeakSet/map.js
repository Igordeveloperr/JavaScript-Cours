const obj = {
    name: "Igor",
    age: 45
}

const entry = [
    ["name", "Igor"],
    ["age", 45]
]

// конвертирую объект в массив
console.log(Object.entries(obj))
// конвертирую массив в объект
console.log(Object.fromEntries(entry))

// класс Map - в конструктор передаем массив, который конвертируется в ассоциативный объект
const map = new Map(entry)
console.log(map)
// получаю значения ключа
console.log(map.get("name"))
// создаю новый ключ
map.set("newKey", 678)
console.log(map.get("newKey"))
// в качестве ключа можно передавать любые данные
map.set(entry, "it's object");
console.log(map.get(entry))
// удаления поля
map.delete("age")
// проверяю наличие ключа
console.log(map.has("age"))
// узнаю размер нашего объекта map
console.log(map.size)
// удаляю все данные из объекта map
// map.clear();
// console.log(map)

// перебор объекта map
for(let [key, value] of map){
    console.log(key, value)
}

// итерация по значениям объекта map
// map.values() - возвращает все значения объекта map
for(let val of map.values()){
    console.log(val)
}

// итерация по ключам объекта map
// map.keys() - возвращает все ключи объекта map
for(let key of map.keys()){
    console.log(key)
}

// лямбда выражения для map
map.forEach((value, key, map) => {
    console.log(key, value)
})

// конвертирование объекта map в массив
const array = [...map]
console.log(array)
// или
const arr = Array.from(map)
console.log(arr)

// создаю еще один объект класса Map с помощью уже созданного объекта класса map
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

// Практика
const users = [
    {name: "Elena"},
    {name: "Alex"},
    {name: "Irina"}
]

const visits = new Map()
visits.set(users[0], new Date())
      .set(users[1], new Date(new Date().getTime()))  
      .set(users[2], new Date(new Date().getTime() + 5000 * 10))

function lastVisit(user){
    return visits.get(user)
}

console.log(lastVisit[0])