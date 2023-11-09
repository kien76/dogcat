var slider1 = new Image();
var slider2 = new Image();
function loadAnh() {
    slider1.src = "img/slider1.jpg";
    slider2.src = "img/slider2.jpg";
}
function onMouseMoveEvent() {
    document.img_slider.src = slider1.src
}
function onMouseOutEvent() {
    document.img_slider.src = slider2.src
}



function bigImg(x) {
    // x.style.height = "300px";
    // x.style.width = "300px";
    x.style = `transform: scale(0.9)`
  }
  
  function normalImg(x) {
    // x.style.height = "280px";
    // x.style.width = "280px";
    x.style = `transform: scale(1)`
  }