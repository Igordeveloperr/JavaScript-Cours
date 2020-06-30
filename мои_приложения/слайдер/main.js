let images = document.querySelectorAll(".slider img");
let count = 0;

function slider() 
{
    for(let i = 0; i < images.length; i++)
    {
        images[i].classList.add("slider-opacity");
    }
}

document.querySelector(".slider").addEventListener("click", slider);

