// эмулирую асинхронность
/*
console.log("Request data...");

setTimeout(() =>
{
    console.log("Preparing data...");
    const backendData = {
        server: "aws",
        port: 2000,
        status: "working"
    };

    setTimeout(() => 
    {   
        backendData.modified = true;
        console.log("Data:", backendData);    
    }, 2000)
} , 2000);
*/
// Промисы нужны для удобной работы с асинхронными операциями
console.log("Request data...");

const p = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Preparing data...");
        const backendData = {
            server: "aws",
            port: 4000,
            status: "working"
        };
        /*передаю сюда объект, чтобы к нему был доступ в методе .then()*/
        resolve(backendData); // завершаю выполнение промиса
    }, 2000)
});

// данный callback будет вызван после окончания асинхронной операции
p.then(backendData => {
    // еще одна асинхронная операция
    return new Promise(function(resolve, reject){
        backendData.modified = true;
        resolve(backendData);
    });
})
// ловим ошибки и выводим в консоль
.catch(err => console.error("Error",err))
// вывод данных по окончанию 2й асинхронной операции
.then(backendData => console.log("Data", backendData))
// выполнится в любом случае
.finally(() => console.log("Finally"));

// фичи
const sleep = ms =>{
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}
sleep(3000).then(() => console.log("after 3 sec"));

// создаю массив промисов
Promise.all([sleep(4000), sleep(5000)])
        // выполница после окончания работы всех промисов в массиве
       .then(() => console.log("All promises")); 

// создаю массив промисов
Promise.race([sleep(3500), sleep(7000)])
        // когда выполнится первый промис, тогда выполнится метод .then()
        .then(() => console.log("Race promises")); 