window.addEventListener('load', ()=> {
    let long;
    let lat;
    let currentSummary = document.querySelector(".current-summary");
    let temp = document.querySelector(".temp");
    let appTemp = document.querySelector(".app-temp");
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
    const dailySummary1 = document.querySelector('.day-1-summary');
    const dailySummary2 = document.querySelector('.day-2-summary');
    const dailySummary3 = document.querySelector('.day-3-summary');
    const dailySummary4 = document.querySelector('.day-4-summary');
    const dailySummary5 = document.querySelector('.day-5-summary');
    const dailySummary6 = document.querySelector('.day-6-summary');
    const dailySummary7 = document.querySelector('.day-7-summary');


            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/9e00d522da20f32ddb9cc5f341b5338a/57.4778,4.2247?lang=gd&units=uk2`;
            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon } = data.currently;
                    // Set DOM Elements from the API
                    temp.textContent = temperature  + " °C";
                    appTemp.textContent = data.currently.apparentTemperature  + " °C";
                    currentSummary.textContent = summary;
                    windSpeed.textContent = data.currently.windSpeed + " m.s.u.";
                    precip.textContent = data.currently.precipIntensity + " mm.s.u.";

                    dailyDay1.textContent = "1";
                    dailyDay2.textContent = "2";
                    dailyDay3.textContent = "3";
                    dailyDay4.textContent = "4";
                    dailyDay5.textContent = "5";
                    dailyDay6.textContent = "6";
                    dailyDay7.textContent = "7";

                    dailyTemp1.textContent = data.daily.data[1].temperatureHigh  + " °C";
                    dailyTemp2.textContent = data.daily.data[2].temperatureHigh  + " °C";
                    dailyTemp3.textContent = data.daily.data[3].temperatureHigh  + " °C";
                    dailyTemp4.textContent = data.daily.data[4].temperatureHigh  + " °C";
                    dailyTemp5.textContent = data.daily.data[5].temperatureHigh  + " °C";
                    dailyTemp6.textContent = data.daily.data[6].temperatureHigh  + " °C";
                    dailyTemp7.textContent = data.daily.data[7].temperatureHigh  + " °C";

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