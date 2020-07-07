"use strict";

class Server
{
    constructor(name, ip)
    {
        this.name = name;
        this.ip = ip;
    }
    getUrl(){return `https://${this.ip}:80`;}
}

const aws = new Server("aws", "127.00.1");
console.log(aws.getUrl());