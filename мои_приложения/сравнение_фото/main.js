const dinamicBlock = document.querySelector("#two");

document.querySelector(".wrap").addEventListener("mousemove", (e) => 
{
    let x = e.offsetX;
    setTimeout(() => {
        dinamicBlock.style.width = x + "px";
    }, 100);
});
