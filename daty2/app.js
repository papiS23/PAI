const hourLine = document.querySelector(".hour-line");
const minuteLine = document.querySelector(".minute-line");
const secondLine = document.querySelector(".second-line");

setInterval(function () {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();

  let hourDeg = 30 * hour;
  let minuteDeg = 6 * minute;
  let secondDeg = 6 * seconds;

  hourLine.style = `transform: rotate(${hourDeg}deg)`;
  minuteLine.style = `transform: rotate(${minuteDeg}deg)`;
  secondLine.style = `transform: rotate(${secondDeg}deg)`;
}, 1000);
