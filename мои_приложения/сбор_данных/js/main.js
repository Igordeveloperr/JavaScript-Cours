"use strict" // код работает в современном режиме

class Form
{
    constructor()
    {
        this.name = document.querySelector("#name");
        this.date = document.querySelector("#date");
        this.btn = document.querySelector("button");
        this.userArr = [];
    }
    workWithData()
    {
        this.btn.addEventListener("click", (e) => 
        {   
            e.preventDefault();
            const nameReg = /\W\D/,
                  dateReg = /\d\d\-\d\d\-\d\d\d\d/;  
            let resName = this.name.value.match(nameReg),
                resDate = this.date.value.match(dateReg);
                
            if(resName === null || resDate === null)
            {
                alert("Неверный формат или пустое поле");
            }
            else
            {   
                let user = {name:null, date:null};
                user.name = resName.input;
                user.date = resDate.input;
                this.userArr.push(user);
                localStorage.setItem("users", JSON.stringify(this.userArr));
            }
        });
    }
}

const test = new Form();
test.workWithData()