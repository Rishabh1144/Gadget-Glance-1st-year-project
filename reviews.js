function display(cid) {
    const wrap = document.querySelector(".wrapper");
    const cnt = document.querySelectorAll(".container");
    const ele = document.getElementById(cid);
    const ul = document.querySelectorAll("ul");
    const back = document.getElementById("back");
    const img = document.querySelectorAll(".item-img");
    const heading = document.querySelector(".heading");

    for (let i = 0; i < cnt.length; i++) {
        cnt[i].style.display = "none";
        cnt[i].style.padding = "1rem";
        cnt[i].classList.remove("cnt-hover");
        ul[i].style.height = "max-content";
        img[i].classList.remove("img-hover");
        heading.classList.add("heading-none");
    }
    ele.classList.add("ele");
    
    wrap.style.marginTop = "13vh";
    back.style.display = "block";
    back.addEventListener("click", function remove() {
        for (let i = 0; i < cnt.length; i++) {
            cnt[i].style.display = "block";
            cnt[i].style.padding = "0 0 1rem 0";
            cnt[i].classList.add("cnt-hover");
            ul[i].style.height = "0";
            ele.classList.remove("ele");
            back.style.display = "none";
            img[i].classList.add("img-hover");
            heading.classList.remove("heading-none");
        }
    });

};