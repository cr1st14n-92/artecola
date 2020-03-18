//SLIDE INFINITO
  let content_slider = document.querySelector(".presentation__slider");
  let indexes = [true, false, false];
  let indexElto = document.querySelectorAll(".index__item");
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
console.log(indexElto)