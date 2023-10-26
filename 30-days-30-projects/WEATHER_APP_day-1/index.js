const apiKey = "e2ddf5a990e23716f6d4eef96a7b2fef";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather i");

async function checkWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchBox.value}&appid=${apiKey}`;
  const response = await fetch(apiUrl);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data.weather[0].main);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.classList.add(
        "fa-solid","fa-cloud-meatball", "fa-spin", "fa-spin-reverse"
      );
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.classList.add("fa-solid", "fa-cloud-sun","fa-bounce");
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.classList.add("fa-solid", "fa-cloud-sun-rain", "fa-beat-fade");
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.classList.add("fa-solid" ,"fa-cloud-bolt","fa-shake");
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.classList.add("fa-solid", "fa-cloud-moon", "fa-beat-fade");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
