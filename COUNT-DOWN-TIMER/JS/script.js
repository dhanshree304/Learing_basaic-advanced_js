let mday = document.getElementById("day");
let hour = document.getElementById("hour");
let minuts = document.getElementById("minute");
let second = document.getElementById("second");

const missionDate = new Date("2023-09-26T22:00:00").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeLeft = missionDate - currentDate;

  if (timeLeft <= 0) {
    mday.value = 0;
    hour.value = 0;
    minuts.value = 0;
    second.value = 0;
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    mday.value = days;
    hour.value = hours;
    minuts.value = minutes;
    second.value = seconds;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
