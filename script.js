function updateClock() {

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let finalTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = finalTime;
}

updateClock();

setInterval(updateClock, 1000);