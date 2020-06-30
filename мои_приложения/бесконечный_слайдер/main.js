let images = document.querySelectorAll(".slider_wrap .slider img"),
    count = 0,
    btnUp = document.querySelector(".btn_slider_up"),
    btnDown = document.querySelector(".btn_slider_down");

function slider()
{
    for(let i = 0; i < images.length; i++)
    {
        images[i].style.opacity = 0;
    }
    images[count].style.opacity = 1;
}
slider();
btnUp.addEventListener("click", () =>
{   
    if(count - 1 == -1)
    {
        count = images.length - 1;
    }
    else
    {
        count--;
    }
    slider();
});
btnDown.addEventListener("click", () => 
{
    if(count + 1 == images.length)
    {
        count = 0;
    }
    else
    {
        count++;
    }
    slider();
});