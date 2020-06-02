// создаю массив
let arr = [1,2,3,4,5];

// кол-во елементов в массиве
console.log(arr.length);

// удаляю последний елемент из массива
arr.pop(); 
console.log(arr);

// добавляю значение в конец массива
arr.push(6);
console.log(arr);

// удаляю последний елемент массива
arr.shift();
console.log(arr);

// добавляю первый елемент массива
arr.unshift(11);
console.log(arr);

// перебор массива
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// перебор массива с помощью метода forEach
/*
    callback функция в методе forEach
    может принимать 3 параметра в строгой последовательности: елемент массива,
    индекс елемента массива и сам массив
*/
arr.forEach((item, i, array) => {
    console.log(i + ": " + item + " в массиве: " + array);
});

// перебор цыклом forOf
let mass = [1,3,5,7,9];

for(let key of mass){
    console.log(key);
}

// применение разделителя
let str = "Hello, i'm Bob, sdc",
    ans = [];
ans = str.split(','); // разбиваю строку на елементы массива
console.log(ans);

// преобразование массива в строку
let boolSettings = [1,1,0,0,1,0],
    boolStr = boolSettings.join("|"); // преобразую массив в строку и добавляю разделитель
console.log(boolStr);

// сортировка по алфавиту
let names = ["Bob", "Alex", "Jack"];
console.log(names.sort());

// сортировка цыфр по возрастанию
let numbers = [89,67,15];

function compareNum(a, b){
    return a - b;
}

console.log(numbers.sort(compareNum));

