const fontSize = document.querySelector("#fontSize");
const select = document.querySelector("#select");
const Btns = document.querySelectorAll(".colorBtns");
const result = document.querySelector("#result");

Btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    result.style = `font-style: ${select.value}; font-size: ${fontSize.value}%; color: ${btn.dataset.color};`;
  });
});
