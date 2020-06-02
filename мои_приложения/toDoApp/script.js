const input = document.querySelector("#create-task"),
addBtn = document.querySelector("#addTask"),
deleteBtn = document.querySelectorAll(".deleteBtn");
let tasks = [];

class Task{
    constructor(task){
        this.task = task;
        input.value == "" ? alert("pull form") : task = input.value;
    }
    addTask(){
        this.task == "" || null ? console.log("incorrect argument"):
        tasks.unshift(this.task);
        const outBlock = document.querySelector(".tasks");
        let out = "";
        for(let i = 0; i < tasks.length; i++){
            out += `<div class="task">`;
                out += `<p>${tasks[i]}</p>`;
                out += `<button class="deleteBtn" articyl="${i}">delete</button>`;
            out += `</div>`;

            outBlock.innerHTML = out;
        }
    }
}

addBtn.addEventListener("click", () => {
    let obj = new Task(input.value);
    obj.addTask();
});
