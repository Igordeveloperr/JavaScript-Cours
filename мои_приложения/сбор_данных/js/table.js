"use strict" // код работает в современном режиме

class Table
{
    constructor()
    {
        this.outNameBlock = document.querySelector("#outName");
        this.outDateBlock = document.querySelector("#outDate");
        this.tableDataArr = [];
    }
    getTableData()
    {
        this.tableDataArr = JSON.parse(localStorage.getItem("users")).reverse();
    }
    nameOut()
    {
        this.getTableData();
        let out = "";
        for(let i = 0; i < this.tableDataArr.length; i++)
        {
            out += `<p>${this.tableDataArr[i]["name"]}</p>`;
            this.outNameBlock.innerHTML = out;
        }
    }
    dateOut()
    {
        this.getTableData();
        let out = "";
        for(let i = 0; i < this.tableDataArr.length; i++)
        {
            out += `<p>${this.tableDataArr[i]["date"]}</p>`;
            this.outDateBlock.innerHTML = out;
        }
    }
}

const table = new Table();
table.nameOut();
table.dateOut();