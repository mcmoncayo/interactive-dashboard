

function updateClock() {

    // Create a new Date object
    const currentDate = new Date();

    // Get the hours, minutes, and seconds
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Determine whether its AM or PM
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert military to 12 hour
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // Add zeros
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Formatting
    let time = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get current date
    let date = currentDate.toLocaleDateString();

    // Updating the HTML elements
    document.getElementById("clock-face").innerHTML = time;
    document.getElementById("calendar-date").innerHTML = date;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Display the clock
updateClock();
