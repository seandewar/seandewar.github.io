// sean's really awesome wedding clock!
// probably the first bit of javascript i've written in years lmao

var days, hrs, mins, secs;
var weddingDate = new Date(1638230400000); // 30.11.2021

// we don't need to wait for the whole page to load; the DOM is enough
document.addEventListener("DOMContentLoaded", function() {
    days = document.getElementById("clock-days");
    hrs = document.getElementById("clock-hrs");
    mins = document.getElementById("clock-mins");
    secs = document.getElementById("clock-secs");
    UpdateClock();
    setInterval(UpdateClock, 1000);
});

function UpdateClock(dateTime = Date.now()) {
    var diff = Math.max(0, weddingDate - dateTime);
    days.innerHTML = Math.floor(diff / (24 * 60 * 60 * 1000));
    hrs.innerHTML = Math.floor((diff / (60 * 60 * 1000)) % 24);
    mins.innerHTML = Math.floor((diff / (60 * 1000)) % 60);
    secs.innerHTML = Math.floor((diff / 1000) % 60);
}
