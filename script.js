const key = "880629a0a85cf17bc03a40895e0aec6e";

function fillUpDetails(datas) {
  document.querySelector(".city").innerHTML = datas.name;
  document.querySelector(".degree").innerHTML = `${datas.main.temp.toFixed(
    0
  )}ºc`;
  document.querySelector(".weather__text").innerHTML =
    datas.weather[0].description.toLowerCase();
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity: ${datas.main.humidity}%`;

  document.querySelector(
    ".img_container"
  ).innerHTML = ` <img class="weather__img" src="https://openweathermap.org/img/wn/${datas.weather[0].icon}.png" alt="app icon">`;
}

async function searchCity(city) {
  const datas = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  ).then((response) => response.json());
  fillUpDetails(datas);

  console.log(datas);
}

function searchButton() {
  const city = document.querySelector(".input__city").value;

  searchCity(city);
  clear();
}

function clear() {
  const city = (document.querySelector("#input__city").value = "");
}

//arrumar
document.addEventListener("keydown", function(event){
  if (event.key === "Enter") {
    searchButton();
  }
});
