// weather data
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.38&lon=-105.53&appid=4eef5881bc00471190bc540f3ac9b94a&units=imperial';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=40.38&lon=-105.53&appid=4eef5881bc00471190bc540f3ac9b94a&units=imperial`;

export async function apiFetch(url) {
    try {
        console.log("Fetching data from URL:", url);
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("Fetched data:", data);
            return data;
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function displayResults(data) {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const skyCondition = document.querySelector('#sky');
    const high = document.querySelector('#high');
    const low = document.querySelector('#low');
    const humidity = document.querySelector('#humidity');
    const sunrise = document.querySelector('#sunrise');
    const sunset = document.querySelector('#sunset');

    console.log("Displaying results:", data);
    currentTemp.innerHTML = `<strong>${Math.round(data.main.temp)}&deg;F</strong>`;
    skyCondition.innerHTML = `${data.weather[0].description}`;
    high.innerHTML = `${Math.round(data.main.temp_max)}&deg;F`;
    low.innerHTML = `${Math.round(data.main.temp_min)}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sunrise.innerHTML = `${new Date (data.sys.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
    sunset.innerHTML = `${new Date (data.sys.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("Icon src:", iconsrc);
    const desc = data.weather[0].description;
    weatherIcon.src = iconsrc;
    weatherIcon.alt = desc;
    console.log("Image src attribute set to:", weatherIcon.getAttribute('src'));
    console.log("Image alt attribute set to:", weatherIcon.getAttribute('alt'));
    skyCondition.textContent = `${desc}`;
}

export function displayThreeDayForecast(data) {
    const todayTemp = document.querySelector('#today');
    const tomorrowTemp = document.querySelector('#tomorrow');
    const nextDayTemp = document.querySelector('#next-day');

    if (!data || ! data.list) {
        console.error("No forecast data available");
        return;
    }

    console.log("Displaying three-day forecast", data);
    const forecastList = data.list.filter((_, index) => index % 8 === 0).slice(0, 3);

    forecastList.forEach((forecast, index) => {
        const date = new Date(forecast.dt_txt);
        const dayofWeek = getDayOfWeek(date);
        const temp = `<strong>${Math.round(forecast.main.temp)}&deg;F</strong>`;
        const forecastText = `${dayofWeek}: ${temp}`;
    
        if (index === 0) {
            tomorrowTemp.innerHTML = forecastText;
        } else if (index === 1) {
            nextDayTemp.innerHTML = forecastText;
        }
    });
}

function getDayOfWeek(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

export async function initweather() {
    const currentWeatherData = await apiFetch(weatherUrl);
    if (currentWeatherData) {
        displayResults(currentWeatherData);
        const todayTemp = document.querySelector('#today');
        todayTemp.innerHTML = `Today: <strong>${Math.round(currentWeatherData.main.temp)}&deg'F</strong>`;
    } else {
        console.error("Failed to fetch current weather data");
    }
    
    const forecastData = await apiFetch(forecastUrl);
    if (forecastData) {
        displayThreeDayForecast(forecastData);
    } else {
        console.error("Failed to fetch forecast data");
    }
}
