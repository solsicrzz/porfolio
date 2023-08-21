let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();


window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset; //180
    if (ubicacionPrincipal >= desplazamientoActual) { // 200 > 180
        document.querySelectorAll(".header-nav")[0].style.top = "0px"

    } else {
        document.querySelectorAll(".header-nav")[0].style.top = "-100px"
        document.querySelectorAll(".header-nav")[0].style.position = "fixed"
    }
    ubicacionPrincipal = desplazamientoActual; //200

})


// Menu

let enlacesHeader = document.querySelectorAll(".menu")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#ffa502";
        semaforo = true;

    }

    enlacesHeader.classList.toggle("menudos")
})



// HAMB

let hambHeader = document.querySelectorAll(".icon-hamb")[0];
let semaforo2 = true;

document.querySelectorAll(".icon-hamb")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".icon-hamb")[0].style.color = "#FF4B2B";
        semaforo2 = false;
    } else {
        document.querySelectorAll(".icon-hamb")[0].style.color = "#FF4B2B";
        semaforo2 = true;

    }

    hambHeader.classList.toggle("icon-hamb2")
})