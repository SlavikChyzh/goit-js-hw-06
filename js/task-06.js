const input = document.getElementById("validation-input");
input.addEventListener("blur", () => {
  if (Number(input.value.length) === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else input.classList.add("invalid");
});
