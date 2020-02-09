var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var colorOnLoad1 = color1.value;
var colorOnLoad2 = color2.value;

setGradient();

// h3 display after new colors selected
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// h3 display on page load
function colorOnPageLoad() {
  css.textContent =
    "linear-graident(to right, " + colorOnLoad1 + ", " + colorOnLoad2 + ")";
}

function randomBackground() {
  var randomColorNum1 = Math.floor(Math.random() * 255 + 1);
  var randomColorNum2 = Math.floor(Math.random() * 255 + 1);
  var randomColorNum3 = Math.floor(Math.random() * 255 + 1);
  var randomColorNum4 = Math.floor(Math.random() * 255 + 1);
  var randomColorNum5 = Math.floor(Math.random() * 255 + 1);
  var randomColorNum6 = Math.floor(Math.random() * 255 + 1);
  body.style.background = `linear-gradient(to right, rgb(${randomColorNum1}, ${randomColorNum2}, ${randomColorNum3}), rgb(${randomColorNum4}, ${randomColorNum5}, ${randomColorNum6}))`;
}

// page load function
colorOnPageLoad();

// set new background functions
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomBackground);
