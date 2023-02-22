
let n1 = document.getElementById("n1");
let s1 = document.getElementById("s1");
let b1 = document.getElementById("b1");
b1.addEventListener("click", converter);
let b2 = document.getElementById("b2");
b2.addEventListener("click", ClearForm);
let n2 = document.getElementById("n2");

function converter() {
  console.log("hello");
  if (s1.value == "Fahrenheit") {
    // c=(f-32)*(5/9)
    n2.value = (n1.value - 32) * (5 / 9);
  } 
  else if (s1.value == "Celcuis") {
    n2.value = n1.value * 1.8 + 32;
  }
}
function ClearForm() {
    onclick = document.getElementById("n1").value="";
    onclick = document.getElementById("n2").value="";
    
}