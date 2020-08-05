// число
let number = 45;
// строка
let string = "hello world!";
// символ
let sym = Symbol();
// логические
let request = true;
// ничего
let db = null;
// неопределенное значение
let color = undefined;
// объект
let home = {
    key: 13579,
    open: openDoor = () => {
        console.log("Door is opening");
    }
};
console.log(home.key);
home.open();
// массив
const array = ["photo1.img", "app.png", "apple.bmp"];

const dataBase = {
    host: "localhost",
    port: 80,
    dbname: "webDBr",
    password: "123",
    getInfo(){
        console.log(`host:${dataBase.host}`);
    }
}

console.log(dataBase.host);
dataBase.getInfo();