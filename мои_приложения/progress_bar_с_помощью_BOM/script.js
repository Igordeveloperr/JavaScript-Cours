let bar = document.querySelector(".progress-bar");

showProgressBar = (elem) =>{
    let val = window.pageYOffset / 100;
    elem = bar;
    val >= 100 ? elem.style.width = 100 + "%":elem.style.width = val + "%";
}

window.onscroll = showProgressBar;