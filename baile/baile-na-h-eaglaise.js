window.addEventListener('load', ()=> {
    let long;
    let lat;

    const currentSummary = document.querySelector(".current-summary");
    const temp = document.querySelector(".temp");
    const appTemp = document.querySelector(".app-temp");
    const windSpeed = document.querySelector(".wind");
    const windBearing = document.querySelector(".wind-bearing");
    const precip = document.querySelector(".precip");
    const humidityLevel = document.querySelector(".humidityLevel");
    const pressure = document.querySelector(".pressure");
    const visibility = document.querySelector(".visibility");

    const dailyDay1 = document.querySelector('.day-1-day');
    const dailySummary1 = document.querySelector('.day-1-summary');
    const dailyTemp1 = document.querySelector('.day-1-temp');
    const dailyAppTemp1 = document.querySelector('.day-1-app-temp');
    const dailyWind1 = document.querySelector('.day-1-wind');
    const dailyWindBearing1 = document.querySelector('.day-1-wind-bearing');
    const dailyPrecip1 = document.querySelector('.day-1-precip');
    const dailyHumidtyLevel1 = document.querySelector('.day-1-humidityLevel');
    const dailyPressure1 = document.querySelector('.day-1-pressure');
    const dailyVisibility1 = document.querySelector('.day-1-visibility');

    const dailyDay2 = document.querySelector('.day-2-day');
    const dailySummary2 = document.querySelector('.day-2-summary');
    const dailyTemp2 = document.querySelector('.day-2-temp');
    const dailyAppTemp2 = document.querySelector('.day-2-app-temp');
    const dailyWind2 = document.querySelector('.day-2-wind');
    const dailyWindBearing2 = document.querySelector('.day-2-wind-bearing');
    const dailyPrecip2 = document.querySelector('.day-2-precip');
    const dailyHumidtyLevel2 = document.querySelector('.day-2-humidityLevel');
    const dailyPressure2 = document.querySelector('.day-2-pressure');
    const dailyVisibility2 = document.querySelector('.day-2-visibility');

    const dailyDay3 = document.querySelector('.day-3-day');
    const dailySummary3 = document.querySelector('.day-3-summary');
    const dailyTemp3 = document.querySelector('.day-3-temp');
    const dailyAppTemp3 = document.querySelector('.day-3-app-temp');
    const dailyWind3 = document.querySelector('.day-3-wind');
    const dailyWindBearing3 = document.querySelector('.day-3-wind-bearing');
    const dailyPrecip3 = document.querySelector('.day-3-precip');
    const dailyHumidtyLevel3 = document.querySelector('.day-3-humidityLevel');
    const dailyPressure3 = document.querySelector('.day-3-pressure');
    const dailyVisibility3 = document.querySelector('.day-3-visibility');

    const dailyDay4 = document.querySelector('.day-4-day');
    const dailySummary4 = document.querySelector('.day-4-summary');
    const dailyTemp4 = document.querySelector('.day-4-temp');
    const dailyAppTemp4 = document.querySelector('.day-4-app-temp');
    const dailyWind4 = document.querySelector('.day-4-wind');
    const dailyWindBearing4 = document.querySelector('.day-4-wind-bearing');
    const dailyPrecip4 = document.querySelector('.day-4-precip');
    const dailyHumidtyLevel4 = document.querySelector('.day-4-humidityLevel');
    const dailyPressure4 = document.querySelector('.day-4-pressure');
    const dailyVisibility4 = document.querySelector('.day-4-visibility');

    const dailyDay5 = document.querySelector('.day-5-day');
    const dailySummary5 = document.querySelector('.day-5-summary');
    const dailyTemp5 = document.querySelector('.day-5-temp');
    const dailyAppTemp5 = document.querySelector('.day-5-app-temp');
    const dailyWind5 = document.querySelector('.day-5-wind');
    const dailyWindBearing5 = document.querySelector('.day-5-wind-bearing');
    const dailyPrecip5 = document.querySelector('.day-5-precip');
    const dailyHumidtyLevel5 = document.querySelector('.day-5-humidityLevel');
    const dailyPressure5 = document.querySelector('.day-5-pressure');
    const dailyVisibility5 = document.querySelector('.day-5-visibility');

    const dailyDay6 = document.querySelector('.day-6-day');
    const dailySummary6 = document.querySelector('.day-6-summary');
    const dailyTemp6 = document.querySelector('.day-6-temp');
    const dailyAppTemp6 = document.querySelector('.day-6-app-temp');
    const dailyWind6 = document.querySelector('.day-6-wind');
    const dailyWindBearing6 = document.querySelector('.day-6-wind-bearing');
    const dailyPrecip6 = document.querySelector('.day-6-precip');
    const dailyHumidtyLevel6 = document.querySelector('.day-6-humidityLevel');
    const dailyPressure6 = document.querySelector('.day-6-pressure');
    const dailyVisibility6 = document.querySelector('.day-6-visibility');

    const dailyDay7 = document.querySelector('.day-7-day');
    const dailySummary7 = document.querySelector('.day-7-summary');
    const dailyTemp7 = document.querySelector('.day-7-temp');
    const dailyAppTemp7 = document.querySelector('.day-7-app-temp');
    const dailyWind7 = document.querySelector('.day-7-wind');
    const dailyWindBearing7 = document.querySelector('.day-7-wind-bearing');
    const dailyPrecip7 = document.querySelector('.day-7-precip');
    const dailyHumidtyLevel7 = document.querySelector('.day-7-humidityLevel');
    const dailyPressure7 = document.querySelector('.day-7-pressure');
    const dailyVisibility7 = document.querySelector('.day-7-visibility');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/9e00d522da20f32ddb9cc5f341b5338a/58.9847,2.9622?lang=gd&units=uk2`;
            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon } = data.currently;
                    const { time } = data.daily;

                    let unix_timestamp1 = data.daily.data[1].time
                    var date = new Date(unix_timestamp1 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate1 = days[date.getDay()];
                    console.log(formattedDate1)

                    let unix_timestamp2 = data.daily.data[2].time
                    var date = new Date(unix_timestamp2 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate2 = days[date.getDay()];
                    console.log(formattedDate2)

                    let unix_timestamp3 = data.daily.data[3].time
                    var date = new Date(unix_timestamp3 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate3 = days[date.getDay()];
                    console.log(formattedDate3)

                    let unix_timestamp4 = data.daily.data[4].time
                    var date = new Date(unix_timestamp4 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate4 = days[date.getDay()];
                    console.log(formattedDate4)

                    let unix_timestamp5 = data.daily.data[5].time
                    var date = new Date(unix_timestamp5 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate5 = days[date.getDay()];
                    console.log(formattedDate5)

                    let unix_timestamp6 = data.daily.data[6].time
                    var date = new Date(unix_timestamp6 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate6 = days[date.getDay()];
                    console.log(formattedDate6)

                    let unix_timestamp7 = data.daily.data[7].time
                    var date = new Date(unix_timestamp7 * 1000);
                    var days = ["Dìdomhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disaithairne"];
                    var formattedDate7 = days[date.getDay()];
                    console.log(formattedDate7)


                    // Set DOM Elements from the API

                    // Current Weather
                    // Set icon
                    setIcons(icon, document.querySelector(".icon"));
                    currentSummary.textContent = summary;
                    temp.textContent = temperature  + " °C";
                    appTemp.textContent = data.currently.apparentTemperature  + " °C";
                    windSpeed.textContent = data.currently.windSpeed + " m.s.u.";
                    if (data.currently.windBearing < 22.5 || data.currently.windBearing > 337.5) {
                    windBearing.textContent = "Tuath";
                    } else if (data.currently.windBearing > 22.5 && data.currently.windBearing < 67.5){
                      windBearing.textContent = "Ear-thuath";
                    } else if (data.currently.windBearing > 67.5 && data.currently.windBearing < 112.5) {
                      windBearing.textContent = "Ear";
                    } else if (data.currently.windBearing > 112.5 && data.currently.windBearing < 157.5){
                      windBearing.textContent = "Ear-dheas";
                    } else if (data.currently.windBearing > 157.5 && data.currently.windBearing < 202.5){
                      windBearing.textContent = "Deas";
                    } else if (data.currently.windBearing > 202.5 && data.currently.windBearing < 247.5){
                      windBearing.textContent = "Iar-dheas";
                    } else if (data.currently.windBearing > 247.5 && data.currently.windBearing < 292.5){
                      windBearing.textContent = "Iar";
                    } else if (data.currently.windBearing > 292.5 && data.currently.windBearing < 337.5){
                      windBearing.textContent = "Iar-thuath";
                    };
                    precip.textContent = data.currently.precipIntensity + " mm.s.u.";
                    humidityLevel.textContent = (data.currently.humidity * 100) + "%";
                    pressure.textContent = data.currently.pressure + " hPA";
                    visibility.textContent = data.currently.visibility + " km";

                    // Day 1 Forecast
                    dailyDay1.textContent = formattedDate1;
                    dailySummary1.textContent = data.daily.data[1].summary;
                    dailyTemp1.textContent = data.daily.data[1].temperatureHigh  + " °C";
                    dailyAppTemp1.textContent = data.daily.data[1].apparentTemperatureHigh  + " °C";
                    dailyWind1.textContent = data.daily.data[1].windSpeed + " m.s.u.";
                    if (data.daily.data[1].windBearing < 22.5 || data.daily.data[1].windBearing > 337.5) {
                    dailyWindBearing1.textContent = "Tuath";
                    } else if (data.daily.data[1].windBearing > 22.5 && data.daily.data[1].windBearing < 67.5){
                      dailyWindBearing1.textContent = "Ear-thuath";
                    } else if (data.daily.data[1].windBearing > 67.5 && data.daily.data[1].windBearing < 112.5) {
                      dailyWindBearing1.textContent = "Ear";
                    } else if (data.daily.data[1].windBearing > 112.5 && data.daily.data[1].windBearing < 157.5){
                      dailyWindBearing1.textContent = "Ear-dheas";
                    } else if (data.daily.data[1].windBearing > 157.5 && data.daily.data[1].windBearing < 202.5){
                      dailyWindBearing1.textContent = "Deas";
                    } else if (data.daily.data[1].windBearing > 202.5 && data.daily.data[1].windBearing < 247.5){
                      dailyWindBearing1.textContent = "Iar-dheas";
                    } else if (data.daily.data[1].windBearing > 247.5 && data.daily.data[1].windBearing < 292.5){
                      dailyWindBearing1.textContent = "Iar";
                    } else if (data.daily.data[1].windBearing > 292.5 && data.daily.data[1].windBearing < 337.5){
                      dailyWindBearing1.textContent = "Iar-thuath";
                    };
                    dailyPrecip1.textContent = data.daily.data[1].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel1.textContent = (data.daily.data[1].humidity * 100) + "%";
                    dailyPressure1.textContent = data.daily.data[1].pressure + " hPA";
                    dailyVisibility1.textContent = data.daily.data[1].visibility + " km";

                    // Day 2 Forecast
                    dailyDay2.textContent = formattedDate2;
                    dailySummary2.textContent = data.daily.data[2].summary;
                    dailyTemp2.textContent = data.daily.data[2].temperatureHigh  + " °C";
                    dailyAppTemp2.textContent = data.daily.data[2].apparentTemperatureHigh  + " °C";
                    dailyWind2.textContent = data.daily.data[2].windSpeed + " m.s.u.";
                    if (data.daily.data[2].windBearing < 22.5 || data.daily.data[2].windBearing > 337.5) {
                    dailyWindBearing2.textContent = "Tuath";
                    } else if (data.daily.data[2].windBearing > 22.5 && data.daily.data[2].windBearing < 67.5){
                      dailyWindBearing2.textContent = "Ear-thuath";
                    } else if (data.daily.data[2].windBearing > 67.5 && data.daily.data[2].windBearing < 112.5) {
                      dailyWindBearing2.textContent = "Ear";
                    } else if (data.daily.data[2].windBearing > 112.5 && data.daily.data[2].windBearing < 157.5){
                      dailyWindBearing2.textContent = "Ear-dheas";
                    } else if (data.daily.data[2].windBearing > 157.5 && data.daily.data[2].windBearing < 202.5){
                      dailyWindBearing2.textContent = "Deas";
                    } else if (data.daily.data[2].windBearing > 202.5 && data.daily.data[2].windBearing < 247.5){
                      dailyWindBearing2.textContent = "Iar-dheas";
                    } else if (data.daily.data[2].windBearing > 247.5 && data.daily.data[2].windBearing < 292.5){
                      dailyWindBearing2.textContent = "Iar";
                    } else if (data.daily.data[2].windBearing > 292.5 && data.daily.data[2].windBearing < 337.5){
                      dailyWindBearing2.textContent = "Iar-thuath";
                    };
                    dailyPrecip2.textContent = data.daily.data[2].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel2.textContent = (data.daily.data[2].humidity * 100) + "%";
                    dailyPressure2.textContent = data.daily.data[2].pressure + " hPA";
                    dailyVisibility2.textContent = data.daily.data[2].visibility + " km";

                    // Day 3 Forecast
                    dailyDay3.textContent = formattedDate3;
                    dailySummary3.textContent = data.daily.data[3].summary;
                    dailyTemp3.textContent = data.daily.data[3].temperatureHigh  + " °C";
                    dailyAppTemp3.textContent = data.daily.data[3].apparentTemperatureHigh  + " °C";
                    dailyWind3.textContent = data.daily.data[3].windSpeed + " m.s.u.";
                    if (data.daily.data[3].windBearing < 22.5 || data.daily.data[3].windBearing > 337.5) {
                    dailyWindBearing3.textContent = "Tuath";
                    } else if (data.daily.data[3].windBearing > 22.5 && data.daily.data[3].windBearing < 67.5){
                      dailyWindBearing3.textContent = "Ear-thuath";
                    } else if (data.daily.data[3].windBearing > 67.5 && data.daily.data[3].windBearing < 112.5) {
                      dailyWindBearing3.textContent = "Ear";
                    } else if (data.daily.data[3].windBearing > 112.5 && data.daily.data[3].windBearing < 157.5){
                      dailyWindBearing3.textContent = "Ear-dheas";
                    } else if (data.daily.data[3].windBearing > 157.5 && data.daily.data[3].windBearing < 202.5){
                      dailyWindBearing3.textContent = "Deas";
                    } else if (data.daily.data[3].windBearing > 202.5 && data.daily.data[3].windBearing < 247.5){
                      dailyWindBearing3.textContent = "Iar-dheas";
                    } else if (data.daily.data[3].windBearing > 247.5 && data.daily.data[3].windBearing < 292.5){
                      dailyWindBearing3.textContent = "Iar";
                    } else if (data.daily.data[3].windBearing > 292.5 && data.daily.data[3].windBearing < 337.5){
                      dailyWindBearing3.textContent = "Iar-thuath";
                    };
                    dailyPrecip3.textContent = data.daily.data[3].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel3.textContent = (data.daily.data[3].humidity * 100) + "%";
                    dailyPressure3.textContent = data.daily.data[3].pressure + " hPA";
                    dailyVisibility3.textContent = data.daily.data[3].visibility + " km";

                    // Day 4 Forecast
                    dailyDay4.textContent = formattedDate4;
                    dailySummary4.textContent = data.daily.data[4].summary;
                    dailyTemp4.textContent = data.daily.data[4].temperatureHigh  + " °C";
                    dailyAppTemp4.textContent = data.daily.data[4].apparentTemperatureHigh  + " °C";
                    dailyWind4.textContent = data.daily.data[4].windSpeed + " m.s.u.";
                    if (data.daily.data[4].windBearing < 22.5 || data.daily.data[4].windBearing > 337.5) {
                    dailyWindBearing4.textContent = "Tuath";
                    } else if (data.daily.data[4].windBearing > 22.5 && data.daily.data[4].windBearing < 67.5){
                      dailyWindBearing4.textContent = "Ear-thuath";
                    } else if (data.daily.data[4].windBearing > 67.5 && data.daily.data[4].windBearing < 112.5) {
                      dailyWindBearing4.textContent = "Ear";
                    } else if (data.daily.data[4].windBearing > 112.5 && data.daily.data[4].windBearing < 157.5){
                      dailyWindBearing4.textContent = "Ear-dheas";
                    } else if (data.daily.data[4].windBearing > 157.5 && data.daily.data[4].windBearing < 202.5){
                      dailyWindBearing4.textContent = "Deas";
                    } else if (data.daily.data[4].windBearing > 202.5 && data.daily.data[4].windBearing < 247.5){
                      dailyWindBearing4.textContent = "Iar-dheas";
                    } else if (data.daily.data[4].windBearing > 247.5 && data.daily.data[4].windBearing < 292.5){
                      dailyWindBearing4.textContent = "Iar";
                    } else if (data.daily.data[4].windBearing > 292.5 && data.daily.data[4].windBearing < 337.5){
                      dailyWindBearing4.textContent = "Iar-thuath";
                    };
                    dailyPrecip4.textContent = data.daily.data[4].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel4.textContent = (data.daily.data[4].humidity * 100) + "%";
                    dailyPressure4.textContent = data.daily.data[4].pressure + " hPA";
                    dailyVisibility4.textContent = data.daily.data[4].visibility + " km";

                    // Day 5 Forecast
                    dailyDay5.textContent = formattedDate5;
                    dailySummary5.textContent = data.daily.data[5].summary;
                    dailyTemp5.textContent = data.daily.data[5].temperatureHigh  + " °C";
                    dailyAppTemp5.textContent = data.daily.data[5].apparentTemperatureHigh  + " °C";
                    dailyWind5.textContent = data.daily.data[5].windSpeed + " m.s.u.";
                    if (data.daily.data[5].windBearing < 22.5 || data.daily.data[5].windBearing > 337.5) {
                    dailyWindBearing5.textContent = "Tuath";
                    } else if (data.daily.data[5].windBearing > 22.5 && data.daily.data[5].windBearing < 67.5){
                      dailyWindBearing5.textContent = "Ear-thuath";
                    } else if (data.daily.data[5].windBearing > 67.5 && data.daily.data[5].windBearing < 112.5) {
                      dailyWindBearing5.textContent = "Ear";
                    } else if (data.daily.data[5].windBearing > 112.5 && data.daily.data[5].windBearing < 157.5){
                      dailyWindBearing5.textContent = "Ear-dheas";
                    } else if (data.daily.data[5].windBearing > 157.5 && data.daily.data[5].windBearing < 202.5){
                      dailyWindBearing5.textContent = "Deas";
                    } else if (data.daily.data[5].windBearing > 202.5 && data.daily.data[5].windBearing < 247.5){
                      dailyWindBearing5.textContent = "Iar-dheas";
                    } else if (data.daily.data[5].windBearing > 247.5 && data.daily.data[5].windBearing < 292.5){
                      dailyWindBearing5.textContent = "Iar";
                    } else if (data.daily.data[5].windBearing > 292.5 && data.daily.data[5].windBearing < 337.5){
                      dailyWindBearing5.textContent = "Iar-thuath";
                    };
                    dailyPrecip5.textContent = data.daily.data[5].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel5.textContent = (data.daily.data[5].humidity * 100) + "%";
                    dailyPressure5.textContent = data.daily.data[5].pressure + " hPA";
                    dailyVisibility5.textContent = data.daily.data[5].visibility + " km";

                    // Day 6 Forecast
                    dailyDay6.textContent = formattedDate6;
                    dailySummary6.textContent = data.daily.data[6].summary;
                    dailyTemp6.textContent = data.daily.data[6].temperatureHigh  + " °C";
                    dailyAppTemp6.textContent = data.daily.data[6].apparentTemperatureHigh  + " °C";
                    dailyWind6.textContent = data.daily.data[6].windSpeed + " m.s.u.";
                    if (data.daily.data[6].windBearing < 22.5 || data.daily.data[6].windBearing > 337.5) {
                    dailyWindBearing6.textContent = "Tuath";
                    } else if (data.daily.data[6].windBearing > 22.5 && data.daily.data[6].windBearing < 67.5){
                      dailyWindBearing6.textContent = "Ear-thuath";
                    } else if (data.daily.data[6].windBearing > 67.5 && data.daily.data[6].windBearing < 112.5) {
                      dailyWindBearing6.textContent = "Ear";
                    } else if (data.daily.data[6].windBearing > 112.5 && data.daily.data[6].windBearing < 157.5){
                      dailyWindBearing6.textContent = "Ear-dheas";
                    } else if (data.daily.data[6].windBearing > 157.5 && data.daily.data[6].windBearing < 202.5){
                      dailyWindBearing6.textContent = "Deas";
                    } else if (data.daily.data[6].windBearing > 202.5 && data.daily.data[6].windBearing < 247.5){
                      dailyWindBearing6.textContent = "Iar-dheas";
                    } else if (data.daily.data[6].windBearing > 247.5 && data.daily.data[6].windBearing < 292.5){
                      dailyWindBearing6.textContent = "Iar";
                    } else if (data.daily.data[6].windBearing > 292.5 && data.daily.data[6].windBearing < 337.5){
                      dailyWindBearing6.textContent = "Iar-thuath";
                    };
                    dailyPrecip6.textContent = data.daily.data[6].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel6.textContent = (data.daily.data[6].humidity * 100) + "%";
                    dailyPressure6.textContent = data.daily.data[6].pressure + " hPA";
                    dailyVisibility6.textContent = data.daily.data[6].visibility + " km";

                    // Day 7 Forecast
                    dailyDay7.textContent = formattedDate7;
                    dailySummary7.textContent = data.daily.data[7].summary;
                    dailyTemp7.textContent = data.daily.data[7].temperatureHigh  + " °C";
                    dailyAppTemp7.textContent = data.daily.data[7].apparentTemperatureHigh  + " °C";
                    dailyWind7.textContent = data.daily.data[7].windSpeed + " m.s.u.";
                    if (data.daily.data[7].windBearing < 22.5 || data.daily.data[7].windBearing > 337.5) {
                    dailyWindBearing7.textContent = "Tuath";
                    } else if (data.daily.data[7].windBearing > 22.5 && data.daily.data[7].windBearing < 67.5){
                      dailyWindBearing7.textContent = "Ear-thuath";
                    } else if (data.daily.data[7].windBearing > 67.5 && data.daily.data[7].windBearing < 112.5) {
                      dailyWindBearing7.textContent = "Ear";
                    } else if (data.daily.data[7].windBearing > 112.5 && data.daily.data[7].windBearing < 157.5){
                      dailyWindBearing7.textContent = "Ear-dheas";
                    } else if (data.daily.data[7].windBearing > 157.5 && data.daily.data[7].windBearing < 202.5){
                      dailyWindBearing7.textContent = "Deas";
                    } else if (data.daily.data[7].windBearing > 202.5 && data.daily.data[7].windBearing < 247.5){
                      dailyWindBearing7.textContent = "Iar-dheas";
                    } else if (data.daily.data[7].windBearing > 247.5 && data.daily.data[7].windBearing < 292.5){
                      dailyWindBearing7.textContent = "Iar";
                    } else if (data.daily.data[7].windBearing > 292.5 && data.daily.data[7].windBearing < 337.5){
                      dailyWindBearing7.textContent = "Iar-thuath";
                    };
                    dailyPrecip7.textContent = data.daily.data[7].precipIntensity + " mm.s.u.";
                    dailyHumidtyLevel7.textContent = (data.daily.data[7].humidity * 100) + "%";
                    dailyPressure7.textContent = data.daily.data[7].pressure + " hPA";
                    dailyVisibility7.textContent = data.daily.data[7].visibility + " km";

                });
        });
    } else {
      window.alert("Cha b' urrainnear d' àite a lorg! Dèan cinnteach gu bheil thu air Location Services an inneil agad a chur air agus gu bheil thu air cead a thoirt dhuinn gus d' àite fhaicinn.");
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
