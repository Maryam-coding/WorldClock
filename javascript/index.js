function updateTime() {
let sanFranciscoElement = document.querySelector("#san-francisco");
let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
let sanFranciscoTime = moment();

sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do YYYY");
sanFranciscoTimeElement.innerHTML = sanFranciscoTime.format("h:mm:ss [<small>]A[</small>]");


let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment();

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");


let lahoreElement = document.querySelector("#lahore");
let lahoreDateElement = lahoreElement.querySelector(".date");
let lahoreTimeElement = lahoreElement.querySelector(".time");
let lahoreTime = moment();

lahoreDateElement.innerHTML = lahoreTime.format("MMMM Do YYYY");
lahoreTimeElement.innerHTML = lahoreTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime,1000);