// Calculate users weekly goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Calculate weekly goal with 5 workdays
    let weeklyGoal = dailyGoal * 5;

    // Calculate weekly goal with bonus tasks
    let totalGoal = Number(weeklyGoal) + Number(bonusTasks);

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

// Task Manager stuff

// Store tasks entered by the user
let myTasks = [];

// Create unordered list for tasks
let taskList = document.createElement("ul");

// Give the list ID
taskList.id = "user-tasks";

// Add the list to the task list container
document.getElementById("task-list").appendChild(taskList);

// Add a task when button is clicked
document.getElementById("add-task").addEventListener("click", function() {

    // Get the task entered by user
    let taskName = document.getElementById("task-name").value;

    // Check that the input is not empty
    if (taskName.trim() !== "") {

        // Store the task in the array
        myTasks.push(taskName);

        // Create a new list item
        let listItem = document.createElement("li");

        // Add the task text to the list item
        listItem.textContent = taskName;

        // Add the list item to the unordered list
        taskList.appendChild(listItem);

        // Clear the input field
        document.getElementById("task-name").value = "";

    } else {
        alert("Please enter a task.");
    }
});
