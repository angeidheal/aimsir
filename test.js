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

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/9e00d522da20f32ddb9cc5f341b5338a/${lat},${long}?lang=gd&units=uk2`;
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
                    temp.textContent = temperature  + " °C";
                    appTemp.textContent = data.currently.apparentTemperature  + " °C";
                    currentSummary.textContent = summary;
                    windSpeed.textContent = data.currently.windSpeed + " m.s.u.";
                    precip.textContent = data.currently.precipIntensity + " mm.s.u.";
                    humidityLevel.textContent = (data.currently.humidity * 100) + "%";
                    pressure.textContent = data.currently.pressure + " hPA";
                    visibility.textContent = data.currently.visibility + " km";

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

                    dailyDay1.textContent = formattedDate1;
                    dailyDay2.textContent = formattedDate2;
                    dailyDay3.textContent = formattedDate3;
                    dailyDay4.textContent = formattedDate4;
                    dailyDay5.textContent = formattedDate5;
                    dailyDay6.textContent = formattedDate6;
                    dailyDay7.textContent = formattedDate7;

                    dailyTemp1.textContent = data.daily.data[1].temperatureHigh  + " °C";
                    dailyTemp2.textContent = data.daily.data[2].temperatureHigh  + " °C";
                    dailyTemp3.textContent = data.daily.data[3].temperatureHigh  + " °C";
                    dailyTemp4.textContent = data.daily.data[4].temperatureHigh  + " °C";
                    dailyTemp5.textContent = data.daily.data[5].temperatureHigh  + " °C";
                    dailyTemp6.textContent = data.daily.data[6].temperatureHigh  + " °C";
                    dailyTemp7.textContent = data.daily.data[7].temperatureHigh  + " °C";

                    dailyAppTemp1.textContent = data.daily.data[1].apparentTemperatureHigh  + " °C";
                    dailyAppTemp2.textContent = data.daily.data[2].apparentTemperatureHigh  + " °C";
                    dailyAppTemp3.textContent = data.daily.data[3].apparentTemperatureHigh  + " °C";
                    dailyAppTemp4.textContent = data.daily.data[4].apparentTemperatureHigh  + " °C";
                    dailyAppTemp5.textContent = data.daily.data[5].apparentTemperatureHigh  + " °C";
                    dailyAppTemp6.textContent = data.daily.data[6].apparentTemperatureHigh  + " °C";
                    dailyAppTemp7.textContent = data.daily.data[7].apparentTemperatureHigh  + " °C";

                    dailyWind1.textContent = data.daily.data[1].windSpeed + " m.s.u.";
                    dailyWind2.textContent = data.daily.data[2].windSpeed + " m.s.u.";
                    dailyWind3.textContent = data.daily.data[3].windSpeed + " m.s.u.";
                    dailyWind4.textContent = data.daily.data[4].windSpeed + " m.s.u.";
                    dailyWind5.textContent = data.daily.data[5].windSpeed + " m.s.u.";
                    dailyWind6.textContent = data.daily.data[6].windSpeed + " m.s.u.";
                    dailyWind7.textContent = data.daily.data[7].windSpeed + " m.s.u.";

                    dailyWindBearing1.textContent = data.daily.data[1].windBearing + " m.s.u.";
                    dailyWindBearing2.textContent = data.daily.data[2].windBearing + " m.s.u.";
                    dailyWindBearing3.textContent = data.daily.data[3].windBearing + " m.s.u.";
                    dailyWindBearing4.textContent = data.daily.data[4].windBearing + " m.s.u.";
                    dailyWindBearing5.textContent = data.daily.data[5].windBearing + " m.s.u.";
                    dailyWindBearing6.textContent = data.daily.data[6].windBearing + " m.s.u.";
                    dailyWindBearing7.textContent = data.daily.data[7].windBearing + " m.s.u.";

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
                    dailyPrecip2.textContent = data.daily.data[2].precipIntensity + " mm.s.u.";
                    dailyPrecip3.textContent = data.daily.data[3].precipIntensity + " mm.s.u.";
                    dailyPrecip4.textContent = data.daily.data[4].precipIntensity + " mm.s.u.";
                    dailyPrecip5.textContent = data.daily.data[5].precipIntensity + " mm.s.u.";
                    dailyPrecip6.textContent = data.daily.data[6].precipIntensity + " mm.s.u.";
                    dailyPrecip7.textContent = data.daily.data[7].precipIntensity + " mm.s.u.";

                    dailyHumidtyLevel1.textContent = (data.daily.data[1].humidity * 100) + "%";
                    dailyHumidtyLevel2.textContent = (data.daily.data[2].humidity * 100) + "%";
                    dailyHumidtyLevel3.textContent = (data.daily.data[3].humidity * 100) + "%";
                    dailyHumidtyLevel4.textContent = (data.daily.data[4].humidity * 100) + "%";
                    dailyHumidtyLevel5.textContent = (data.daily.data[5].humidity * 100) + "%";
                    dailyHumidtyLevel6.textContent = (data.daily.data[6].humidity * 100) + "%";
                    dailyHumidtyLevel7.textContent = (data.daily.data[7].humidity * 100) + "%";

                    dailySummary1.textContent = data.daily.data[1].summary;
                    dailySummary2.textContent = data.daily.data[2].summary;
                    dailySummary3.textContent = data.daily.data[3].summary;
                    dailySummary4.textContent = data.daily.data[4].summary;
                    dailySummary5.textContent = data.daily.data[5].summary;
                    dailySummary6.textContent = data.daily.data[6].summary;
                    dailySummary7.textContent = data.daily.data[7].summary;
                    // Set icon
                    setIcons(icon, document.querySelector(".icon"));

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
