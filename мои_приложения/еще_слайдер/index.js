window.addEventListener("load", () => {
    const slide = document.querySelectorAll(".slider_line .slide"),
          buttons = document.querySelectorAll(".slider_buttons button"),
          line = document.querySelector(".slider_line"),
          width = slide[0].clientWidth,
          max = width * slide.length - width;
    let count = 0;

    buttons.forEach(el => {
        el.addEventListener("click", e => {  
            let elem = e.target.dataset["push"];
            if(elem === "next"){
                if(count !== max){
                    count += width;
                    line.style.transform = `translateX(${-count}px)`;
                }
            }
            else{
                if(count !== 0){
                    count = count - width;
                    line.style.transform = `translateX(${-count}px)`;
                }
            }
        });
    });
});