const API_KEY = "YOUR_API_KEY_HERE";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();

    if (!cityInput) {
        alert("Please enter a city name");
        return;
    }

    const url = `${BASE_URL}?q=${cityInput}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerText =
            `${data.main.temp}°C`;

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        alert(error.message);
    }
}