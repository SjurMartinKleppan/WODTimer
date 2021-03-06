// Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status

let status = "stopped";

//Stopwatch function (logic to determine when to increment next value etc.)
function stopWatch() {

    seconds ++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1){
        seconds = 0;
        minutes ++;
        if (minutes / 60 === 1){
            minutes = 0;
            hours ++;
        }
    }

    // If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10){
        displaySeconds = "0"+ seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


// Define the timecap
    let timeCap = document.getElementById("forTimeCap").value;
    let timeConvert = Number(timeCap);

//Logic when to stop the stopwatch and timeCap is equal to the minutes displayed
    if (timeConvert != "" && timeConvert == displayMinutes){
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
        alert("Great job! TimeCap was reached!" + displayHours + ":" + displayMinutes + ":" + displaySeconds);
    }
}

// Function to start/stop the stopwatch
function startStop() {
    if (status === "stopped") {
        //start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
        alert("Great job! Your time was "+ displayHours + ":" + displayMinutes + ":" + displaySeconds);
    }


}

//Function to reset the stopwatch
function reset() {
    if (status === "stopped"){
        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display").innerHTML = "00:00:00";
    } else {

    }
}
