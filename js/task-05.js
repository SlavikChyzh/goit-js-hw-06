const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", spanChange);

function spanChange() {
  if (input.value.trim()) span.textContent = input.value;
  else span.textContent = "Anonymous";
}
