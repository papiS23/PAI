const hourLine = document.querySelector(".hour-line");
const minuteLine = document.querySelector(".minute-line");
const secondLine = document.querySelector(".second-line");

setInterval(function () {
  let now = new Date();
  let seconds = now.getMilliseconds() / 1000 + now.getSeconds();
  let minute = seconds / 60 + now.getMinutes();
  let hour = minute / 60 + now.getHours();

  let hourDeg = 30 * (hour > 12 ? hour - 12 : hour);
  let minuteDeg = 6 * minute;
  let secondDeg = 6 * seconds;

  hourLine.style = `transform: rotate(${hourDeg}deg)`;
  minuteLine.style = `transform: rotate(${minuteDeg}deg)`;
  secondLine.style = `transform: rotate(${secondDeg}deg)`;
}, 1);
