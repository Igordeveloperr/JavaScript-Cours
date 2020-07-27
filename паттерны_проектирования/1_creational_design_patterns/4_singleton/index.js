/*
    Паттерн заключается в использовании одного объекта во всем приложении
*/

class DataBase
{
    constructor(data) {
        // если класс уже создан, то запрещаем создавать новый объект и откатываемся к старому
        if(DataBase.exists)
        {
            return DataBase.instance
        }
        DataBase.instance = this;
        DataBase.exists = true;
        this._data = data;
    }

    get data(){return this._data;}
}

// создаю 1 инстанс класса DataBase
const mongo = new DataBase("{name: MongoDB}");
console.log(mongo.data);

// создаю 2 инстанс класса DataBase
const mysql = new DataBase("{name: mysql}");
/*
    вызываю метод для получения data и вдруг вижу MongoDB,
    а не mysql. В рамках этого паттерна все так и должно работать
    при создании любого по счету инстанса класса DataBase, мы будем откатываться
    к свойствам первого созданного нами инстанса.
*/
console.log(mysql.data);