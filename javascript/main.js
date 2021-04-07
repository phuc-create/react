//set color for span of logo
const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const colorSpan = document.querySelectorAll(".logo__hue-color");
const colorLine = document.getElementById("line__hue-color");

function autoColor() {
    return Math.floor(Math.random() * HEX.length);
}

function setColorforSpan() {
    let sharp = "#";
    for (var i = 0; i < 6; i++) {
        sharp += HEX[autoColor()];

    }
    colorSpan.forEach(singleColor => {
        singleColor.style.color = sharp;
    })
    colorLine.style.background = sharp;
}
setInterval(() => {
    setColorforSpan();
}, 1500)

const toggleButton = document.querySelector(".toggle-icon__show");
const MenuShow = document.querySelector(".menu-show__toggle");
const singleMenu = document.querySelectorAll(".__toggle--menu-single");
const toggleRemove = document.querySelector(".__toggle-remove");


toggleButton.addEventListener("click", () => {
    MenuShow.classList.add("active-show");
    toggleRemove.classList.add("active");
    singleMenu.forEach(single => {

        single.style.display = "flex";
        single.classList.add("active-move");
        setTimeout(() => {
            single.classList.add("animatewidth");
        }, 1300);
    })

});
toggleRemove.addEventListener("click", () => {
    singleMenu.forEach(single => {
        single.style.display = "none";
        single.classList.remove("active-move");
        single.classList.remove("animatewidth");
    })
    toggleRemove.classList.remove("active");
    setTimeout(() => {
        MenuShow.classList.remove("active-show");
    }, 500)
})
const headerOverlay = document.querySelector(".header-overlay");

window.addEventListener("load", () => {
    headerOverlay.classList.remove("active");
})