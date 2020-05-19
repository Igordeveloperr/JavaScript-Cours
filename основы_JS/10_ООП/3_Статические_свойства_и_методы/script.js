// объявляю класс
class User{
    // создаю статическое свойство
    static test = true;
    // создаю статический метод, который можно вызвать только от самого класса
    static getDBStatus(){console.log("status = 200");}
}
// обращаюсь к статическому методу
console.log(User.test);

// вызываю статический метод класса User
User.getDBStatus();
