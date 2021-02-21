const menu = document.querySelector("#menu");
menu.style.maxHeight = "0px";

function menuToggle() {
    if (menu.style.maxHeight === "0px") {
        menu.style.maxHeight = "300px";
    } else {
        menu.style.maxHeight = "0px";
    }
}

const bigImg = document.querySelector("#big-img");
console.log(bigImg.src);
const smallImg = document.querySelectorAll(".small-img");

for (const a of smallImg) {
    a.onclick = function() {
        bigImg.src = a.src;
    }
}