const hourLine = document.querySelector(".hour-line");
const minuteLine = document.querySelector(".minute-line");
const secondLine = document.querySelector(".second-line");
const numClock = document.querySelector(".number-clock");

setInterval(function () {
  let now = new Date();
  let seconds = now.getSeconds();
  let minute = seconds / 60 + now.getMinutes();
  let hour = minute / 60 + now.getHours();

  numClock.innerText = `${Math.floor(hour)}:${Math.floor(minute)}:${
    Math.floor(seconds) < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds)
  }`;

  let hourDeg = 30 * (hour > 12 ? hour - 12 : hour);
  let minuteDeg = 6 * minute;
  let secondDeg = 6 * seconds;

  hourLine.style = `transform: rotate(${hourDeg}deg)`;
  minuteLine.style = `transform: rotate(${minuteDeg}deg)`;
  secondLine.style = `transform: rotate(${secondDeg}deg)`;
}, 60);
