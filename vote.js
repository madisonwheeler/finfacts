var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var buttons = document.querySelectorAll(".unrevealed");
var labels = document.querySelectorAll("label");
var next = document.getElementById("next");
console.log(labels);

function revealAnswers(num){
  next.removeAttribute("hidden");
  buttons.forEach(function(item) {
    item.classList.add("revealed");
    item.classList.remove("unrevealed");
  });
  labels.forEach(function(item) {
    item.removeAttribute("hidden");
  });
  var button = document.getElementById("b" + num);
  var symbol;
  if (button.classList.contains("truth-button")) {
    symbol = document.getElementById("w" + num);
  }
  else {
    symbol = document.getElementById("r" + num);
  }
    symbol.removeAttribute("hidden");
};

b1.addEventListener("click", function(){
  b1.classList.add("selected");
  revealAnswers(1);})

b2.addEventListener("click", function(){
  b2.classList.add("selected");
  revealAnswers(2);})

b3.addEventListener("click", function(){
  b3.classList.add("selected");
  revealAnswers(3);})
