function getWeather() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = '39c770f4ad7b9020c2324002ce88d58d'; // Replace with your API key from OpenWeatherMap

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = `
            <h2>Weather Information</h2>
            <p>Location: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
    });
}
