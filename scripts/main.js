function openFunction() {
    document.getElementById("menu").style.width = "400px";
    document.getElementById("mainbox").style.marginRight = "0px";
    document.getElementById("mainbox").innerHTML = "";
    blurElementsExceptSidemenu();
}

function closeFunction() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginRight = "0px";
    document.getElementById("mainbox").innerHTML = "&#9776; ";
    removeBlurFromSidemenu();
}

function blurElementsExceptSidemenu() {
    var elementsToBlur = document.getElementsByClassName("wrapp");
    for (var i = 0; i < elementsToBlur.length; i++) {
        elementsToBlur[i].classList.add("blur");
    }
}

function removeBlurFromSidemenu() {
    var elementsToBlur = document.getElementsByClassName("wrapp");
    for (var i = 0; i < elementsToBlur.length; i++) {
        elementsToBlur[i].classList.remove("blur");
    }
}