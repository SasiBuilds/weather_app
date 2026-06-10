const apiKey = "12956bbca017867eebe8253ccbf9bb7b";

async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;

    if (cityInput === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

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