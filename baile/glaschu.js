window.addEventListener('load', ()=> {
    let long;
    let lat;

    const currentSummary = document.querySelector(".current-summary");
    const temp = document.querySelector(".temp");
    const appTemp = document.querySelector(".app-temp");
    const windSpeed = document.querySelector(".wind");
    const precip = document.querySelector(".precip");

    const dailyDay1 = document.querySelector('.day-1-day');
    const dailyDay2 = document.querySelector('.day-2-day');
    const dailyDay3 = document.querySelector('.day-3-day');
    const dailyDay4 = document.querySelector('.day-4-day');
    const dailyDay5 = document.querySelector('.day-5-day');
    const dailyDay6 = document.querySelector('.day-6-day');
    const dailyDay7 = document.querySelector('.day-7-day');

    const dailyTemp1 = document.querySelector('.day-1-temp');
    const dailyTemp2 = document.querySelector('.day-2-temp');
    const dailyTemp3 = document.querySelector('.day-3-temp');
    const dailyTemp4 = document.querySelector('.day-4-temp');
    const dailyTemp5 = document.querySelector('.day-5-temp');
    const dailyTemp6 = document.querySelector('.day-6-temp');
    const dailyTemp7 = document.querySelector('.day-7-temp');

    const dailyAppTemp1 = document.querySelector('.day-1-app-temp');
    const dailyAppTemp2 = document.querySelector('.day-2-app-temp');
    const dailyAppTemp3 = document.querySelector('.day-3-app-temp');
    const dailyAppTemp4 = document.querySelector('.day-4-app-temp');
    const dailyAppTemp5 = document.querySelector('.day-5-app-temp');
    const dailyAppTemp6 = document.querySelector('.day-6-app-temp');
    const dailyAppTemp7 = document.querySelector('.day-7-app-temp');

    const dailyWind1 = document.querySelector('.day-1-wind');
    const dailyWind2 = document.querySelector('.day-2-wind');
    const dailyWind3 = document.querySelector('.day-3-wind');
    const dailyWind4 = document.querySelector('.day-4-wind');
    const dailyWind5 = document.querySelector('.day-5-wind');
    const dailyWind6 = document.querySelector('.day-6-wind');
    const dailyWind7 = document.querySelector('.day-7-wind');

    const dailyPrecip1 = document.querySelector('.day-1-precip');
    const dailyPrecip2 = document.querySelector('.day-2-precip');
    const dailyPrecip3 = document.querySelector('.day-3-precip');
    const dailyPrecip4 = document.querySelector('.day-4-precip');
    const dailyPrecip5 = document.querySelector('.day-5-precip');
    const dailyPrecip6 = document.querySelector('.day-6-precip');
    const dailyPrecip7 = document.querySelector('.day-7-precip');

    const dailySummary1 = document.querySelector('.day-1-summary');
    const dailySummary2 = document.querySelector('.day-2-summary');
    const dailySummary3 = document.querySelector('.day-3-summary');
    const dailySummary4 = document.querySelector('.day-4-summary');
    const dailySummary5 = document.querySelector('.day-5-summary');
    const dailySummary6 = document.querySelector('.day-6-summary');
    const dailySummary7 = document.querySelector('.day-7-summary');

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/9e00d522da20f32ddb9cc5f341b5338a/55.8642,4.2518?lang=gd&units=uk2`;
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

            dailyPrecip1.textContent = data.daily.data[1].precipIntensity + " mm.s.u.";
            dailyPrecip2.textContent = data.daily.data[2].precipIntensity + " mm.s.u.";
            dailyPrecip3.textContent = data.daily.data[3].precipIntensity + " mm.s.u.";
            dailyPrecip4.textContent = data.daily.data[4].precipIntensity + " mm.s.u.";
            dailyPrecip5.textContent = data.daily.data[5].precipIntensity + " mm.s.u.";
            dailyPrecip6.textContent = data.daily.data[6].precipIntensity + " mm.s.u.";
            dailyPrecip7.textContent = data.daily.data[7].precipIntensity + " mm.s.u.";

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

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
