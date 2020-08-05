for(let i = 0; i <= 10; i++){
    console.log(i * 10);
}

let a = 4;
while(a < 16){
    console.log(a * 2 - 2);
    a += 4;
}


const arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

for(let a of arr){
    console.log(a)
}


const dataBase = {
    host: "localhost",
    port: 80,
    dbname: "webDBr",
    password: "123",
    getInfo(){
        console.log(`host:${dataBase.host}`);
    }
}

for(let k in dataBase){
    console.log(`key: ${k}, value: ${dataBase[k]}`);
}
