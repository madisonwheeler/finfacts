var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var buttons = document.querySelectorAll(".unrevealed");
var labels = document.querySelectorAll("label");
var next = document.getElementById("next");
console.log(labels);

b1.addEventListener("click", function(){
  next.removeAttribute("hidden");
  b1.classList.add("selected");
  buttons.forEach(function(item) {
    item.classList.add("revealed");
    item.classList.remove("unrevealed");
  });
  labels.forEach(function(item) {
    item.removeAttribute("hidden");
  });})

b2.addEventListener("click", function(){
  next.removeAttribute("hidden");
  b2.classList.add("selected");
  buttons.forEach(function(item) {
    item.classList.add("revealed");
    item.classList.remove("unrevealed");
  });
  labels.forEach(function(item) {
    item.removeAttribute("hidden");
  });})

b3.addEventListener("click", function(){
  next.removeAttribute("hidden");
  b3.classList.add("selected");
  buttons.forEach(function(item) {
    item.classList.add("revealed");
    item.classList.remove("unrevealed");
  });
  labels.forEach(function(item) {
    item.removeAttribute("hidden");
  });})
