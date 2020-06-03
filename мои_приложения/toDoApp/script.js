const addBtn = document.querySelector("#addTask"),
input = document.querySelector("#create-task");
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
        input.value = "";
    }
    deleteTask(){
        const deleteBtn = document.querySelectorAll(".deleteBtn");
        for(let i = 0; i < deleteBtn.length; i++){
            deleteBtn[i].addEventListener("click", (e) => {
                let element = e.target,
                articyl = element.getAttribute("articyl"),
                index = Number(articyl);
                element.parentNode.remove(element);
                tasks.splice(index, 1);
            });
        }
    }
}

addBtn.addEventListener("click", () => {
    let obj = new Task(input.value);
    obj.addTask();
    obj.deleteTask();
});
