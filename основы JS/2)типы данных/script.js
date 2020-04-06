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
let array = ["photo1.img", "app.png", "apple.bmp"];
console.log(array[1]);