const clockP = document.querySelector(".clock");
const inputs = document.querySelectorAll(".inputs");
const submitBtn = document.querySelector(".submitBtn");
const resultP = document.querySelector(".result");

setInterval(function () {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let secounds = now.getSeconds();

  clockP.innerText = `${hours >= 10 ? hours : "0" + hours}:${
    minutes >= 10 ? minutes : "0" + minutes
  }:${secounds >= 10 ? secounds : "0" + secounds}`;
}, 1000);

submitBtn.addEventListener("click", function () {
  const input1 = new Date(inputs[0].value);
  const input2 = new Date(inputs[1].value);
  const roznica = input2 - input1;

  if (roznica < 0) {
    resultP.innerText = "Data końcowa jest nieprawidłowa";
  } else {
    const days = roznica / (1000 * 60 * 60 * 24);
    resultP.innerText = `Roznica wynosi ${days} ${days == 1 ? "dzien" : "dni"}`;
  }
});
