class Animation{
    constructor(){
        this.count = 0;
        this.startWindow = document.querySelector(".rain");
    }
    startRain()
    {
        for(let i = 0; i < 3; i++)
        {
            const drop = document.createElement("div");
            this.startWindow.append(drop);
            drop.classList.add("drop");
            setTimeout(() => drop.classList.toggle("active"), 100);
        }    
    }
}

new Animation().startRain();


