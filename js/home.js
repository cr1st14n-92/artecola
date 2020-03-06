const postsBtn = document.querySelectorAll('.posts__box__container-btn');
const postTexts = document.querySelectorAll('.posts__box__container-text');
const postTitles = document.querySelectorAll('.posts__box__container-title');
const postsBox = document.querySelectorAll('.posts__box__container-img');
function isTotallyVisible(elto) {
    var xViewport = window.innerWidth || document.documentElement.clientWidth;
    var yViewport = window.innerHeight || document - documentElement.clientHeight;
    //posicion de la caja del elemento
    var caja = elto.getBoundingClientRect();
    return (caja.top >= 0 &&
        caja.bottom <= yViewport &&
        caja.left >= 0 &&
        caja.right <= xViewport);

}
function isElementPartiallyVisible(elto) {
    var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
    //Posición de la caja del elemento
    var caja = elto.getBoundingClientRect();
    var cajaDentroH = (caja.left >= 0 && caja.left <= anchoViewport) ||
                      (caja.right >= 0 && caja.right <= anchoViewport);
    var cajaDentroV = (caja.top >= 0 && caja.top <= alturaViewport) ||  
                      (caja.bottom>= 0 && caja.bottom <= alturaViewport);  
    return (cajaDentroH && cajaDentroV);
}
let indicador=false

//ANIMACION INTRO
function animacion_intro(position){

    if(position>250){
       let intro_element= document.getElementById("intro__box__row");
       if(indicador==false){
          
           intro_element.style.marginTop="-10px"
           indicador=true;
       }else{
           indicador=false;
        intro_element.style.marginTop="15px"
       }
         
    }
}

window.addEventListener('scroll', function () {

    //console.log( window.scrollY)
    animacion_intro(window.scrollY)
    var isVisible;
    postsBox.forEach(function (element, index) {
        if (isElementPartiallyVisible(element)) {
           postTexts[index].classList.add('animated','fadeInUpBig');
           postsBtn[index].classList.add('animated','fadeInUpBig');
           postTitles[index].classList.add('animated','fadeInDownBig');
        }
    });

})


function menu_responsive(){
    let btn_close=document.getElementById("header__nav-close")
    let btn_menu=document.getElementById("header__btn-menu");
    let responsive= document.getElementById("header__menu-responsive")
    btn_menu.addEventListener("click",()=>{
        responsive.style.right="0px";
    })

    btn_close.addEventListener("click",()=>{
        responsive.style.right="-100%";
    })
}




function redimensionar() {
    let image = document.getElementById("header__banner-image1")

    let ocultar_capa = document.getElementById("header__content-banner")

    let total = (parseInt(image.clientHeight)) * 26 / 100

    ocultar_capa.style.height = (parseInt(image.clientHeight) - total) + "px"
}


let f = function () {
    let eventHandler = function (event) {
        redimensionar();
    }

    window.addEventListener("resize", eventHandler, false)

}


document.addEventListener("DOMContentLoaded", f, false);



function init() {
    redimensionar();
    menu_responsive();
}


init();