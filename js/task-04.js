const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");
let counterValue = +value.textContent;
console.log(counterValue);
decrement.addEventListener("click", sub);
increment.addEventListener("click", add);

function add() {
  counterValue += 1;
  value.textContent = counterValue;
}
function sub() {
  counterValue -= 1;
  value.textContent = counterValue;
}
