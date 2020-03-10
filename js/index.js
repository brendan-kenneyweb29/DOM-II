//// Event Listeners ////

// 1
let imgShad = document.querySelector("img")
imgShad.addEventListener("mouseover", () => {
    imgShad.style.boxShadow = "0px 0px 5px black";
    imgShad.style.transform = "scale(1.05)";
})
imgShad.addEventListener("mouseleave", () => {
    imgShad.style.boxShadow = "0px 0px 0px black";
    imgShad.style.transform = "scale(1)";
})

// 2
let changeBG = document.body;
changeBG.addEventListener("keydown", (event) => {
    if(event.key === "b"){
        changeBG.style.backgroundColor = "black";
    }
})

// 3
let buttonScale = document.querySelectorAll(".btn")
buttonScale.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)"
        button.style.backgroundColor = "#28B3C9";
    })
})
buttonScale.forEach(button => {
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)"
        button.style.backgroundColor = "#17A2B8";
    })
})

// 4
let doubleClick = document.querySelector(".HAVEFUN")
doubleClick.addEventListener("dblclick", () => {
    doubleClick.style.transform = "scale(2)";
}
)

// 5
let navBg = document.querySelector(".main-navigation")
navBg.addEventListener("mouseenter", () => {
    navBg.style.backgroundColor = "grey";
})
navBg.addEventListener("mouseleave", () => {
    navBg.style.backgroundColor = "white";
})

// 6
let header2Color = document.querySelectorAll("h2")
header2Color.forEach(head => {
    head.addEventListener("mouseover", () => {
        head.style.color = "blue";
    })
})

// 7
let header4Color = document.querySelectorAll("h4")
header4Color.forEach(head => {
    head.addEventListener("mouseover", () => {
        head.style.color = "orange";
    })
})

// 8
let imgHov = document.querySelectorAll("img")
imgHov.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.boxShadow = "0px 0px 3px black";
        img.style.transform = "scale(1.1)";
    })
})
imgHov.forEach(img => {
    img.addEventListener("mouseleave", () => {
        img.style.boxShadow = "0px 0px 0px black";
        img.style.transform = "scale(1)";
    })
})

// 9
let copyright = document.querySelector("footer")
copyright.addEventListener("dblclick", () => {
    copyright.style.backgroundColor = "grey";
})

// 10
let funBus = document.getElementById("funbus")
funBus.addEventListener("click", () => {
    funBus.style.color = "aquamarine";
})

// Prevent
let noRefresh = document.querySelectorAll("a")
noRefresh.forEach(a => {
    a.addEventListener("click", (event) => {
        event.preventDefault();
    })
})