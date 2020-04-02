const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5606338&units=imperial&APPID=e4b0cc1a908e08acfe807161b82de367';
var now = new Date();
var dayOfWeek = now.getDay();

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentCondition = document.querySelector('#condition');
    const currentTemp = document.querySelector('#temp');
    const currentHumidity = document.querySelector('#humidity');
    const currentWindspeed = document.querySelector('#windspeed');

    currentCondition.textContent = jsObject.list[0].weather[0].main;
    console.log(currentCondition);
    currentTemp.textContent = Math.round(jsObject.list[0].main.temp);
    currentHumidity.textContent = Math.round(jsObject.list[0].main.humidity);
    currentWindspeed.textContent = Math.round(jsObject.list[0].wind.speed);

    const temp = jsObject.list[0].main.temp;
    const windspeed = jsObject.list[0].wind.speed;
    console.log(temp);
    console.log(windspeed);

    if (temp <= 50 && windspeed >= 3) {
        const windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16))).toFixed(2);
        document.getElementById('windchill').textContent = Math.round(windchill);
    } else {
        const windchill = ('N/A');
        document.getElementById('windchill').textContent = windchill;
    }
}); document.getElementById('windchill').textContent = windchill;
