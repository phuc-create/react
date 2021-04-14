const aboutPage = document.querySelector(".about");
const offPage = document.querySelector(".about-overpage-off");
const textnoStroke = document.querySelector(".about-me");
const textStroke = document.querySelector(".about-me.no-ani");
const meInfor = document.querySelector(".about-me-content");
const meInforText = document.querySelectorAll(".about-me-content-ani");
const lineWidth1 = document.querySelector(".line1");
const lineWidth2 = document.querySelector(".line2");
const lineWidth3 = document.querySelector(".line3");
const lineWidth4 = document.querySelector(".line4");
const openBtn1 = document.getElementById("vis--open1");
const openBtn2 = document.getElementById("vis--open2");
const openBtn3 = document.getElementById("vis--open3");
const openBtn4 = document.getElementById("vis--open4");
const overFull = document.querySelector(".proj__block--img-full");
const overFull2 = document.querySelector(".proj__block--img-full2");
const overFull3 = document.querySelector(".proj__block--img-full3");
const overFull4 = document.querySelector(".proj__block--img-full4");
//set scroll  =600 and animation
window.addEventListener("scroll", (e) => {
    var windowScroll = window.scrollY;

    if (windowScroll >= 200) {
        if (!aboutPage.classList.contains("overpage")) {
            offPage.classList.add("overpage-on");
        }
    } else {
        offPage.classList.remove("overpage-on");
    }
    if (windowScroll >= 600) {
        if (!textnoStroke.classList.contains("animate") && !textStroke.classList.contains("animate-stroke")) {
            textnoStroke.classList.add("animate");
            textStroke.classList.add("animate-stroke")
        }
    } else {
        textnoStroke.classList.remove("animate");
        textStroke.classList.remove("animate-stroke")

    }
    if (windowScroll >= 680) {
        if (!meInfor.classList.contains("animateInfor")) {
            setTimeout(() => {
                meInfor.classList.add("animateInfor");
            }, 400)
        }
        meInforText.forEach(singleTxt => {
            if (!singleTxt.classList.contains("active")) {
                setTimeout(() => {
                    singleTxt.classList.add("active");
                }, 1000);
            }
        })
    } else {
        meInfor.classList.remove("animateInfor");
        meInforText.forEach(singleTxt => {

            singleTxt.classList.remove("active");

        })
    }
    //animation with scroll to 1918
    /*
    lineWidth.forEach(singleLine => {

        if (windowScroll >= 2019) {
            if (!singleLine.classList.contains("activeWidth")) {
                singleLine.classList.add("activeWidth");
            }
        } else {
            singleLine.classList.remove("activeWidth");
        }
        /*if (!singleLine.classList.contains("activeWidth")) {
            singleLine.classList.add("activeWidth");
        }
    })
    if (windowScroll >= 2019) {
        setTimeout(() => {
            openBtn.forEach(singleOpenBtn => {
                if (!singleOpenBtn.classList.contains("active")) {
                    singleOpenBtn.classList.add("active");
                }
            })
        }, 700);
    } else {
        openBtn.forEach(singleOpenBtn => {

            singleOpenBtn.classList.remove("active");

        })
    }*/
    if (windowScroll >= 1768) {
        if (!lineWidth1.classList.contains("activeWidth") && !openBtn1.classList.contains("active") && !overFull.classList.contains("setFull")) {
            lineWidth1.classList.add("activeWidth");
            overFull.classList.add("setFull");
            setTimeout(() => {
                openBtn1.classList.add("active")
            }, 700)
        }
    } else {
        lineWidth1.classList.remove("activeWidth");
        openBtn1.classList.remove("active");
        overFull.classList.remove("setFull");
    }


    if (windowScroll >= 2158) {
        if (!lineWidth2.classList.contains("activeWidth") && !openBtn2.classList.contains("active") && !overFull2.classList.contains("setFull")) {
            lineWidth2.classList.add("activeWidth");
            overFull2.classList.add("setFull");
            setTimeout(() => {
                openBtn2.classList.add("active")
            }, 700);
        }
    } else {
        lineWidth2.classList.remove("activeWidth");
        openBtn2.classList.remove("active");
        overFull2.classList.remove("setFull");
    }


    if (windowScroll >= 2560) {
        if (!lineWidth3.classList.contains("activeWidth") && !openBtn3.classList.contains("active") && !overFull3.classList.contains("setFull")) {
            lineWidth3.classList.add("activeWidth");
            overFull3.classList.add("setFull");
            setTimeout(() => {
                openBtn3.classList.add("active");
            }, 700);
        }
    } else {
        lineWidth3.classList.remove("activeWidth");
        openBtn3.classList.remove("active");
        overFull3.classList.remove("setFull");
    }


    if (windowScroll >= 2917) {
        if (!lineWidth4.classList.contains("activeWidth") || !openBtn4.classList.contains("active") && !overFull4.classList.contains("setFull")) {
            lineWidth4.classList.add("activeWidth");
            overFull4.classList.add("setFull");
            setTimeout(() => {
                openBtn4.classList.add("active")
            }, 700);
        }
    } else {
        lineWidth4.classList.remove("activeWidth");
        openBtn4.classList.remove("active");
        overFull4.classList.remove("setFull");
    }
})