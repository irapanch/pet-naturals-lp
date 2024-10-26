function startTimer(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor((timer % 3600) / 60);
    seconds = Math.floor(timer % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}

window.onload = function () {
  let twoHours = 2 * 60 * 60; // 2 години в секундах
  let display = document.getElementById("timer");
  startTimer(twoHours, display);
};
