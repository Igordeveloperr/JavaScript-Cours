// обычная функция
function showMessage(text){
    console.log(text);
    const funcUpp = apdateData();
    funcUpp();
}
showMessage("Hello world!");

// стрелочная функция
let calc = (a, b) => console.log(a+b); 
calc(10, 100);

// функция - замыкание
function apdateData(){
    let userStatus = [10, 20, 30, 40, 50];
    return function () {
        for(let i = 0; i < userStatus.length; i++){
            userStatus[i] += 10;
            console.log(userStatus[i]);
        }
    };
}

// callback функция
function getString(){let str = "gg my friend!"; return str;}
function setString(getStrFunc){
    let str = getStrFunc() + " Well played!";
    console.log(str.toUpperCase());
}
setString(getString);

// рекурсивная функция
function showInterval(number){
    const limit = 5;
    if (number <= limit){
        console.log(number);
        number++;
        showInterval(number);
    }
    else{
        console.log("limit value of number = 5");
    }
}
showInterval(1);

// генерирую переменную
function createVar(){let number = 89138534399; return number;}
let newNum = createVar();
console.log(newNum);