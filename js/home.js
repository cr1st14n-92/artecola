const postsBtn = document.querySelectorAll('.posts__box__container-btn');
const postTexts = document.querySelectorAll('.posts__box__container-text');
const postTitles = document.querySelectorAll('.posts__box__container-title');
const postsBox = document.querySelectorAll('.posts__box__container-img');
const footerDescargas = document.querySelector('.footer_descargas-text');
const postsImage=document.querySelector('.posts__box__container');

var animation = 'fadeInLeft';
var xScreen = window.innerWidth || document.documentElement.clientWidth
console.log(window.innerWidth);
const element = document.querySelector('.right');
if (element) {
    if (xScreen <= 425) {
        animation = 'fadeInLeft';
        element.classList.remove('right')

    } else {
        console.log(element);
        element.classList.add('right')
    }
}
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
        (caja.bottom >= 0 && caja.bottom <= alturaViewport);
    return (cajaDentroH && cajaDentroV);
}
let indicador = false

//ANIMACION INTRO
function animacion_intro(position) {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    let intro_element = document.getElementById("intro__box__row");
    var init, final;
    if (screenWidth >= 716) {
        init = -15;
        final = init + 20;

        if (isTotallyVisible(intro_element)) {
            intro_element.style.marginTop = init + 'px'
        } else {
            intro_element.style.marginTop = final + 'px'
        }

    } else
        if (screenWidth >= 600) {
            init = -80;
            final = init + 20;
            if (isElementPartiallyVisible(intro_element)) {
                intro_element.style.marginTop = init + 'px'
            } else {
                intro_element.style.marginTop = final + 'px'
            }
        }
        else
            if (screenWidth >= 340) {
                init = -110;
                final = init + 20;
                if (isElementPartiallyVisible(intro_element)) {
                    intro_element.style.marginTop = init + 'px'
                } else {
                    intro_element.style.marginTop = final + 'px'
                }
            } else {
                init = -110;
                final = init + 20;

                if (isElementPartiallyVisible(intro_element)) {
                    intro_element.style.marginTop = init + 'px'
                } else {
                    intro_element.style.marginTop = final + 'px'
                }
            }
}


// Animacion menu responsivo

function menu_animado(position){

}




///Manipulacion de clases en posts



window.addEventListener('scroll', function () {
    animacion_intro(window.scrollY)
    postsBox.forEach(function (element, index) {
        if (isTotallyVisible(element)) {
            postTexts[index].classList.add('animated', animation);
            postsBtn[index].classList.add('animated', animation);
            postTitles[index].classList.add('animated', 'fadeInDownBig');
        }
        if(isTotallyVisible(footerDescargas)){
            footerDescargas.classList.add('animated','zoomInUp')
        }
    });

})


function menu_responsive() {
    let btn_close = document.getElementById("header__nav-close")
    let btn_menu = document.getElementById("header__btn-menu");
    let responsive = document.getElementById("header__menu-responsive")
    btn_menu.addEventListener("click", () => {
        responsive.style.right = "0px";
    })

    btn_close.addEventListener("click", () => {
        responsive.style.right = "-130%";
    })
}


function slider(){
    let content_slide=document.getElementById("content-slide");
    let btn_left= document.getElementById("btn-left");
    let btn_right= document.getElementById("btn-right");
    let titles= document.getElementsByClassName("slide-title");
    let aux_img=[true,false,false];
    let imagenes_banner= document.getElementsByClassName("img-banner");


    setInterval(() => {
        btn_right.click();
    }, 2900);

    btn_right.addEventListener("click",()=>{
        content_slide.style.transition="all .5s ease"
        content_slide.style.marginLeft="-200%";
        titles[0].style.lineHeight="3";
        titles[0].style.color="rgba(0,0,0,0.0)";
        titles[0].style.transition="all .5s ease";

        for(let i=0;i<imagenes_banner.length;i++){
            imagenes_banner[i].src="./avatar/icons/bola-vacia.svg";
            
               if(aux_img[i]==true){
                   aux_img[i]=false
                i++;
                if(i==3){
                    i=0;
                }           
                imagenes_banner[i].src="./avatar/icons/bola-llena.svg";                 
                    aux_img[i]=true 
               }
           }
        
        setTimeout(()=>{
            content_slide.style.transition="none"
            content_slide.style.marginLeft="-99.98%";
            let first_child=content_slide.children[0];
      let clon= first_child.cloneNode(true);
        content_slide.appendChild(clon);
        content_slide.removeChild(first_child);

       titles[0].style.transition="all .5s ease";
       titles[0].style.lineHeight="1";
       titles[0].style.color="white";
       
       

        },500)
    })

 

    btn_left.addEventListener("click",()=>{
        content_slide.style.transition="all .5s ease"
        content_slide.style.marginLeft="0%";

        for(let i=imagenes_banner.length-1;i>=0;i--){
            imagenes_banner[i].src="./avatar/icons/bola-vacia.svg";
               if(aux_img[i]==true){
                   aux_img[i]=false
                i--;
                if(i==-1){
                    i=2;
                }           
                imagenes_banner[i].src="./avatar/icons/bola-llena.svg";                 
                    aux_img[i]=true 
               }
           }

        setTimeout(()=>{
            content_slide.style.transition="none"
            content_slide.style.marginLeft="-99.98%";
            let last_child=content_slide.children[2];
      let clon= last_child.cloneNode(true);
        content_slide.insertBefore(clon, content_slide.children[0]);
        content_slide.removeChild(last_child);
        },500)

    })
    




}




function redimensionar() {
    /*let image = document.getElementById("header__banner-image1")

    let ocultar_capa = document.getElementById("header__content-banner")

    let total = (parseInt(image.clientHeight)) * 26 / 100; 

    if(total<200){
        document.getElementById("header__banner-image1").style.height="700px"
        document.getElementById("header__banner-image1").style.width="auto";
        document.getElementById("header__banner-image1").style.marginLeft="-450px"
        
    }

    if(document.body.clientWidth>768){
        document.getElementById("header__banner-image1").style.height="auto";
        document.getElementById("header__banner-image1").style.width="100%";
        document.getElementById("header__banner-image1").style.marginLeft="0px"
        
        

    }


       
        ocultar_capa.style.height = (parseInt(image.clientHeight) - total) + "px"
       

    
*/
    
}


let f = function () {
    let eventHandler = function (event) {
        redimensionar();
    }

    window.addEventListener("resize", eventHandler, false)

}


document.addEventListener("DOMContentLoaded", f, false);

//mediaquery en js 
function myFunction(x) {
    if (x.matches) { // If media query matches
        let responsive= document.getElementById("header__menu-responsive");
        responsive.style.height= window.innerHeight+"px"
    } 
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 





function init() {
    redimensionar();
    menu_responsive();

    slider();
}


init();