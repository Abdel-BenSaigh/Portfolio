let spanUp = document.querySelector(".up")




window.onscroll = function () {
    if (this.scrollY >= 999) {
        spanUp.classList.add("show")
    } else {
        spanUp.classList.remove("show")
    };
    
};

spanUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


