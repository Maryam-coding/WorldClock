function updateTime() {

    // San Francisco
    let sanFranciscoElement = document.querySelector("#san-francisco");
    if (sanFranciscoElement){
        let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
        let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
        let sanFranciscoTime = moment().tz("Americas/Los_Angeles");

        sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do YYYY");
        sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format("h:mm:ss [<small>]A[</small>]");
    }
    //London
    let londonElement = document.querySelector("#london");
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
        londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
    }
    // Lahore
    let lahoreElement = document.querySelector("#lahore");
    if (lahoreElement) {
        let lahoreDateElement = lahoreElement.querySelector(".date");
        let lahoreTimeElement = lahoreElement.querySelector(".time");
        let lahoreTime = moment().tz("Asia/Karachi");

        lahoreDateElement.innerHTML = lahoreTime.format("MMMM Do YYYY");
        lahoreTimeElement.innerHTML = lahoreTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/"[1]);
    let cityTime = moment().tz(cityTimeZone);
    let cicitiesElement = document.querySelector("#cities");
    cicitiesElement.innerHTML = `
    <div class="city>
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>[${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All cities</a>
    `;

}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);