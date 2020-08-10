// с помощью WeakMap можно избегать утечек данных в JS
let obj = {name: "map"}

// класс WeakMap
// !!! в структуре WeakMap ключами могут являться только объекты
const map = new WeakMap([
    [obj, "obj data"]
])

// методы WeakMap: get, set, delete, has
console.log(map.has(obj))

// практика
const cache = new WeakMap()
function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, "new user")
        return cache.get(user)
    }
}

let lena = {name: "Lena"}
let alex = {name: "Alex"}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))