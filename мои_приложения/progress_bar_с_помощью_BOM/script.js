let bar = document.querySelector(".progress-bar");

showProgressBar = (elem) =>{
    let body = document.querySelector("body").clientHeight;
    val = (window.pageYOffset * 100) / body;
    elem = bar;
    elem.style.width = val + "%";
    console.log(body);
}

window.onscroll = showProgressBar;