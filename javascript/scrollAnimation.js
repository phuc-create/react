const aboutPage = document.querySelector(".about");
const offPage = document.querySelector(".about-overpage-off");
const textnoStroke = document.querySelector(".about-me");
const textStroke = document.querySelector(".about-me.no-ani");
const meInfor = document.querySelector(".about-me-content");
const meInforText = document.querySelectorAll(".about-me-content-ani");
const lineWidth = document.querySelectorAll(".proj__vis--line");
const openBtn = document.querySelectorAll("#proj__vis--open");
//set scroll  =600 and animation
window.addEventListener("scroll", (e) => {
    var windowScroll = window.scrollY;
    console.log(windowScroll);
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
    //
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
        }*/
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
    }
})