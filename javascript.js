let sunset, sunrise;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "da1e968d3fmsh2f9c77966226f2dp10c91djsnc33d375d4ac8",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      Queta_cloud_pct.innerHTML = "cloud  : " + response.cloud_pct + " %";
      Queta_temp.innerHTML = "Temp : " + response.temp + " C ";
      Queta_feels_like.innerHTML = "Feel like :" + response.feels_like + " C";
      Queta_humidity.innerHTML = "Humidity :" + response.humidity + " %";
      Queta_min_temp.innerHTML = "Min Temp :" + response.min_temp + " C";
      Queta_max_temp.innerHTML = "Max Temp :" + response.max_temp + " C";
      Queta_wind_speed.innerHTML =
        "Wind Speed :" + response.wind_speed + " km/h";
      Queta_sunrise.innerHTML = "Sunrise :" + response.sunrise;
      Queta_sunset.innerHTML = "Sunset :" + response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (city.value === "") {
    return alert("Your have to Provide City Name");
  }
  getWeather(city.value);
});

getWeather("Islamabad");
