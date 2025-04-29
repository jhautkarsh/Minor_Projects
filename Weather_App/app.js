const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon')

const apiKey = "bb786e058d63665e492acc25d5f4b572";

const checkWeather = async (city) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather.main == 'Snow'){
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector('.weather').style.display ='block'
    } catch (error) {
        console.error(error);
        alert("Unable to get weather. Please check the city name.");
    }
};

searchBtn.addEventListener('click', () => {
    let city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
searchBox.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        let city = searchBox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
        alert("Please enter a city name.");
    }
    }
});
