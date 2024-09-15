function geoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            document.getElementById("latitude").textContent = `The latitude is: ${latitude}`;
            document.getElementById("longitude").textContent = `The longitude is: ${longitude}`;
        });
    } else {
        console.log("Oops! Cannot get latitude or longitude.");
    }
}

var index = window.geoLocation = geoLocation;

export { index as default };
