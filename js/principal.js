function menu_responsive() {
  let btn_close = document.getElementById("header__nav-close");
  let btn_menu = document.getElementById("header__btn-menu");
  let responsive = document.getElementById("header__menu-responsive");
  btn_menu.addEventListener("click", () => {
    responsive.style.right = "0px";
  });

  btn_close.addEventListener("click", () => {
    responsive.style.right = "-130%";
  });
}

//mediaquery en js
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    let responsive = document.getElementById("header__menu-responsive");
    responsive.style.height = window.innerHeight + "px";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

function init() {
  menu_responsive();
}
init();
