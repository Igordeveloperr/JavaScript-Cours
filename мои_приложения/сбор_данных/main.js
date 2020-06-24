"use strict" // код работает в современном режиме

class Form
{
    constructor()
    {
        this.nameVal = document.querySelector("#name");
        this.dateVal = document.querySelector("#date");
        this.formBtn = document.querySelector("form button");
        console.log(this.nameVal, this.dateVal, this.formBtn);
    }
}

