const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
    }
});

document.querySelectorAll('.navigation a').forEach(link => {
    if (link.href === window.location.href){
        link.classList.add('active');
    }
});

// For Weather Card
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#sky');
const feelsLike = document.querySelector('#feels-like');
const windSpeed = document.querySelector('#wind-speed');
const windGusts = document.querySelector('#wind-gusts');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.38&lon=-105.53&appid=4eef5881bc00471190bc540f3ac9b94a&units=imperial';

async function apiFetch(url) {
    try {
        console.log("Fetching data from URL:", url);
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("Fetched data:", data);
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log("Displaying results:", data);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    feelsLike.innerHTML = `${data.main.feels_like}&deg;F`;
    windSpeed.innerHTML = `${data.wind.speed}mph`;
    windGusts.innerHTML = `${data.wind.gust}mph`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("Icon src:", iconsrc);
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    console.log("Image src attribute set to:", weatherIcon.getAttribute('src'));
    console.log("Image alt attribute set to:", weatherIcon.getAttribute('alt'));
    captionDesc.textContent = `${desc}`;
}
apiFetch(url);