"user strict" // код работает в современном режиме

class User
{   
    #db = "https://gokhliaDb.com"; // приватное свойство, которое доступно только в классе
    constructor()
    {
        this._name = "default name"; // если перед именнованием свойства пишется нижнее подчеркивание, то оно считается защищенным(protected)
    }
    // метод set меняет значение защищенной переменной (protected)
    set name(name){this._name = name.trim().toLowerCase();}
    
    // метод get выводит значение защищенной переменной (protected)
    get name(){console.log(this._name);}

    // обращаюсь к приватному свойству
    dbConnect(){console.log(`подключение к базе данных на сервере: ${this.#db}`);}
}

const user = new User();
console.log(user.name); // вызываю getter
user.name = "   Igor    "; // вызываю setter
console.log(user.name); // вызываю getter

user.dbConnect();