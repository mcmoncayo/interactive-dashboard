// Put your JavaScript code in this file
// Array containing possible Magic Eight Ball answers
let answers = [
    "Yes",
    "No",
    "It is certain",
    "Ask again later",
    "Very likely",
    "Do not count on it"
];

// Displays a random answer inside the circle
function displayAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomIndex];

    let circle = document.getElementById("circle");

    circle.innerHTML = randomAnswer;
    circle.style.display = "block";
}

// Checks for a question when the Magic Eight Ball is clicked
document.getElementById("ball").addEventListener("mousedown", function() {

    let question = document.getElementById("question").value;

    if (question === "") {
        alert("Please enter a yes/no question.");
    }
    else {
        displayAnswer();
    }

});

// Hides the answer when the reset button is clicked
document.getElementById("reset").addEventListener("click", function() {

    document.getElementById("circle").style.display = "none";

});

