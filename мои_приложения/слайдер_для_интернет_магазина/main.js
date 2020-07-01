const slides = document.querySelectorAll(".slide"),
      outBlock = document.querySelector(".out"),
      outherBlock = document.querySelector(".outher");  

slider = () => 
{
    for(let i = 0; i < slides.length; i++)
    {   
        slides[i].addEventListener("click", () => 
        {   
            let out = `<img src="${slides[i].getAttribute('src')}">`;
            slides[i].classList.add("active");
            outBlock.innerHTML = out;
        });
    }
}      

slider();