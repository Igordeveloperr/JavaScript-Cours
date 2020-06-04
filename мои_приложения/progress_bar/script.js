progress = (e) =>
{   
    let btn = e.target;
    btn.disabled = true;
    let element = document.querySelector(".progress_bar"),
        width = 0,
        id = setInterval(progressStatus, 100);
        function progressStatus()
        {
            if (width >= 100){
                clearInterval(id);
                btn.disabled = false;
            }
            else{
                element.style.background = "rgb(101, 226, 84)";
                width++;
                element.style.width = width + "%";
                element.innerHTML = width + "%";
            }
        }
}

document.querySelector("button").addEventListener("click", progress);