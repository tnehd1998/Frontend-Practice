var _ = require("lodash");

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("answer:", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector(".randomColor");

css.textContent = `Color 1 : ${color1.value}, Color 2 : ${color2.value}`;

function setRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = `Color 1 : ${color1.value}, Color 2 : ${color2.value}`;
}

function randomMixedColor() {
  color1.value = setRandomColor();
  color2.value = setRandomColor();
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = `Color 1 : ${color1.value}, Color 2 : ${color2.value}`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColor.addEventListener("click", randomMixedColor);
