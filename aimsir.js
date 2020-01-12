window.addEventListener('load', ()=> {
    let long;
    let lat;
    let currentSummary = document.querySelector(".current-summary");
    let degree = document.querySelector(".degree");
    const temperatureSpan = document.querySelector('.temperature span');
    const dailySummary1 = document.querySelector('.daily-summary-1');
    const dailySummary2 = document.querySelector('.daily-summary-2');
    const dailySummary3 = document.querySelector('.daily-summary-3');
    const dailySummary4 = document.querySelector('.daily-summary-4');
    const dailySummary5 = document.querySelector('.daily-summary-5');
    const dailySummary6 = document.querySelector('.daily-summary-6');
    const dailySummary7 = document.querySelector('.daily-summary-7');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/9e00d522da20f32ddb9cc5f341b5338a/${lat},${long}?lang=gd&units=si`;
            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon } = data.currently;
                    // Set DOM Elements from the API
                    degree.textContent = temperature  + " °C";
                    currentSummary.textContent = summary;
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
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
