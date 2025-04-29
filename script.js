var arrow = document.getElementById("arrow-up");
var reviews = document.getElementById("reviews");
var subReviews = document.querySelector(".sub-reviews");
var cross = document.getElementById("cross");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 500){
        arrow.style.display = "block";
    }
    else{
        arrow.style.display = "none";
    }
});
arrow.addEventListener("click", function(){
    window.scrollTo({top:0, behavior:"smooth"});
});
function open(){
    subReviews.classList.add("sub-reviews-size");
}
function close(){
    subReviews.classList.remove("sub-reviews-size");
}
reviews.addEventListener("click", open);
cross.addEventListener("click", close);
var startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", open);
