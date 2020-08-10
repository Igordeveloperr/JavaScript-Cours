// класс WeakSet
const users = [
    {name: "Elena"},
    {name: "Alex"},
    {name: "Irina"}
]

const visit = new WeakSet()

visit.add(users[0]).add(users[1]).add(users[2])

console.log(visit.has(users[0]))