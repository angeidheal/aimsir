window.addEventListener('load', ()=> {
    let long;
    let lat;
    let currentSummary = document.querySelector(".current-summary");
    let degree = document.querySelector(".degree");
    let temperature = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector('.temperature span');
    const dailySummary = document.querySelector('.daily-summary');

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
                    degree.textContent = temperature  + " C";
                    currentSummary.textContent = summary;
                    dailySummary.textContent = data.daily.summary;
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
