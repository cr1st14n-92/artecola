

function redimensionar(){
    let image=document.getElementById("header__banner-image1")
    
    let ocultar_capa=document.getElementById("header__content-banner")

    let total =(parseInt(image.clientHeight))*29/100
    
    ocultar_capa.style.height= (parseInt(image.clientHeight)-total)+"px"
}


let f= function(){
    let eventHandler= function(event){
          redimensionar();
    }

    window.addEventListener("resize",eventHandler,false)

}


document.addEventListener("DOMContentLoaded",f,false);



function init(){
    redimensionar();
}


init();