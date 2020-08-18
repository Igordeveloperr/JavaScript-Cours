// функция генератор

function* strGenerator(){
    yield "hello"
    yield "world"
}

const str = strGenerator()
console.log(str.next().value)
console.log(str.next().value)

// еще пример
function* numberGener(n = 10){
    for(let i = 0; i < n; i++){
        yield i
    }
}

const number = numberGener(7)
console.log(number.next())

// пишем свой генератор
const iterator = {
    [Symbol.iterator](n = 10){
        let i = 0

        return{
            next(){
                if(i < n){
                    return {value: ++i, done: false}
                }
                return{value: undefined, done:true}
            }
        }
    }
}

// цикл forOf
for(let i of iterator){
    console.log(i)
}