let popUp = (document.querySelector(".pop-up"));
let popUpBtn = (document.querySelector(".btn"));
let popUpClose = (document.querySelector(".pop-up-closed"));
let footerBtn = (document.querySelector(".btn_btn-dark"));

function showPopUpClick() {
    popUp.classList.add("pop-up-show");
}

popUpBtn.addEventListener("click", showPopUpClick);
footerBtn.addEventListener("click", showPopUpClick);

popUpClose.addEventListener("click", function() {
    popUp.classList.remove("pop-up-show");
})


let swiper = new Swiper(".mySwiper", {

    slidesPerView: 1.18,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});