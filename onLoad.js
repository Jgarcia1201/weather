async function onLoad() {
    const cityDiv = document.querySelector('.city');
    const cond = document.querySelector('.cond'); 
    const deg = document.querySelector('.deg');
    const feels = document.querySelector('#feels');
    const humid = document.querySelector('#humid');
    const wind = document.querySelector('#wind');
    let faren = '\xB0';

    try {
        // Get Weather: 
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=8ec3a4d0dbc0412ebc4190012210408&q=houston&aqi=yes', {mode: 'cors'}); 
        const weatherData = await response.json();
        console.log(weatherData);
        // Displaying: 
        cityDiv.innerHTML = weatherData.location.name + ", " + weatherData.location.region;
        cond.innerHTML = weatherData.current.condition.text;
        deg.innerHTML = Math.round(weatherData.current.temp_f) + faren;
        feels.innerHTML = "Feels Like: " + Math.round(weatherData.current.feelslike_f) + faren + 'F';
        humid.innerHTML = "Humidity: " + weatherData.current.humidity + "%";
        wind.innerHTML = "Wind: " + weatherData.current.wind_mph + " MPH " + weatherData.current.wind_dir;
    }
    catch (error) {
        console.log("you fucked up.");
        return 0;  
    }
};

export default onLoad