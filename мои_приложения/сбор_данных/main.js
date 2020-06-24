"use strict" // код работает в современном режиме

class Form
{
    constructor()
    {
        this.nameVal = document.querySelector("#name"),
        this.dateVal = document.querySelector("#date"); 
        this.formBtn = document.querySelector("form button").addEventListener("click", this.getData);
        this.userObj = {};
        this.arr = [];
    }

    getData(e)
    {   
        e.preventDefault();
        console.log(this.nameVal.value);
    }
}

const test = new Form();