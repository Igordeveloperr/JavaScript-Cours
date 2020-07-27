/*
    Паттерн заключается
    в добавлении нового функционала
    в уже существующих классах
*/ 

class Server
{
    constructor(ip, port){
        this._ip = ip;
        this.port = port;
    }

    get url(){return `https://${this._ip}:${this.port}`;}
}

// пишу декоратор
function aws(server)
{
    // добавляю новые свойства и методы
    server.isAWS = true;
    server.awsInfo = function(){
        return server.url;
    }

    // возвращаю инстанс с новыми свойствами и методами
    return server;
}

// создаю инстанс
const server1 = new Server("127.0.0.1", 80);
// использую декоратор
aws(server1);
// проверяю свойства и методы, добавленные декоратором
console.log(server1.isAWS);
console.log(server1.awsInfo());