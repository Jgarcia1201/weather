function createUrl(string) {
    const search = document.querySelector('.search'); 
    let key = 'key=8ec3a4d0dbc0412ebc4190012210408&q='; 
    let api = 'http://api.weatherapi.com/v1/current.json?';
    let aqi = '&aqi=yes'; 
    let city = string;
    let weatherUrl = api + key + city + aqi;
    return weatherUrl; 
}


async function weather() {
    const cityDiv = document.querySelector('.city');
    const cond = document.querySelector('.cond'); 
    const deg = document.querySelector('.deg');
    const feels = document.querySelector('#feels');
    const humid = document.querySelector('#humid');
    const wind = document.querySelector('#wind');
    let search = document.querySelector('.search');
    let userUrl = createUrl(search.value);

    try {
        // Get Weather: 
        const response = await fetch(userUrl, {mode: 'cors'}); 
        const weatherData = await response.json();
        console.log(weatherData);       
        // Displaying state v. Displaying Country if not in US:
        if (weatherData.location.country != "United States of America") {
            cityDiv.innerHTML = weatherData.location.name + ", " + weatherData.location.country;
        }
        else {
            cityDiv.innerHTML = weatherData.location.name + ", " + weatherData.location.region;
        }
        cond.innerHTML = weatherData.current.condition.text;
        deg.innerHTML = Math.round(weatherData.current.temp_f) + '\xB0';
        feels.innerHTML = "Feels Like: " + Math.round(weatherData.current.feelslike_f) + '\xB0F';
        humid.innerHTML = "Humidity: " + weatherData.current.humidity + "%";
        wind.innerHTML = "Wind: " + weatherData.current.wind_mph + " MPH " + weatherData.current.wind_dir; 
    }
    catch (error) {
        alert('No Location Found. Try another place or something? Idk im just a computer');
        search.value = ""; 
        return 0;  
    }
};

export default weather