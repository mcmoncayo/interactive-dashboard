
// Calculate users weekly goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Calculate weekly goal with 5 workdays
    let weeklyGoal = dailyGoal * 5;

    // Calculate weekly goal with bonus tasks
    let totalGoal = weeklyGoal + Number(bonusTasks);

    // Create message to display
    let output = "User:" + userName + "<br>" + "Total Weekly Goal:" + totalGoal;

    // Display results on page
    document.getElementById("goal-message").innerHTML = output;
}

// Run the calculation when button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event) {

    // Prevent form from submitting and refreshing the page
    event.preventDefault();

    // Get user input values
    let userName = document.getElementById("user-name").value;
    let dailyGoal = document.getElementById("daily-goal").value;
    let bonusTasks = document.getElementById("bonus-tasks").value;

    // Call weeklyGoal function with form values
    weeklyGoal(userName, dailyGoal, bonusTasks);

});