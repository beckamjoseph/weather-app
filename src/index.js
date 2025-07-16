const apiKey = "85ecd4f0646036675dc1961020688025";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name.toUpperCase().split('').join(' ');
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".month").innerHTML = month
 
    console.log(month);
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather();
