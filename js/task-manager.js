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

// Store tasks in an array of objects
let myTasks = [];
let nextTaskId = 1;

// Get the task list container
let taskList = document.getElementById("task-list");

// Function to display tasks
function displayTasks() {

    // Clear the current task display
    taskList.innerHTML = "";

    // Create an unordered list
    let taskItems = document.createElement("ul");

    myTasks.forEach(function(task) {

        // Create a list item and task text
        let listItem = document.createElement("li");
        let taskText = document.createElement("span");

        taskText.textContent = task.name + " - " + task.priority;

        // Highlight important tasks in red
        if (task.isImportant) {
            listItem.style.color = "red";
        }

        // Apply strikethrough to completed tasks
        if (task.isCompleted) {
            taskText.style.textDecoration = "line-through";
        }

        // Apply styling based on priority
        if (task.priority === "High") {
            listItem.style.borderLeft = "5px solid red";
        } else if (task.priority === "Medium") {
            listItem.style.borderLeft = "5px solid orange";
        } else {
            listItem.style.borderLeft = "5px solid green";
        }

        // Create the complete button
        let completeButton = document.createElement("button");
        completeButton.textContent = task.isCompleted
            ? "Mark Incomplete"
            : "Complete";
        completeButton.type = "button";

        completeButton.addEventListener("click", function() {
            toggleComplete(task.id);
        });

        // Create the edit button
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.type = "button";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });

        // Create the delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        // Add elements to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Add the task to the unordered list
        taskItems.appendChild(listItem);
    });

    // Add the list to the webpage
    taskList.appendChild(taskItems);
}

// Function to add a task
function addTask(name, priority, isImportant) {

    let newTask = {
        id: nextTaskId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    myTasks.push(newTask);

    displayTasks();

    // Log the full task list
    console.log(JSON.stringify(myTasks));
}

// Add a task when the form is submitted
document.getElementById("task-form").addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    let taskName = document.getElementById("task-name").value.trim();
    let priority = document.getElementById("task-priority").value;
    let isImportant = document.getElementById("task-important").checked;

    // Check that the task name is not empty
    if (taskName !== "") {
        addTask(taskName, priority, isImportant);

        // Clear the task name and checkbox
        document.getElementById("task-name").value = "";
        document.getElementById("task-important").checked = false;
        document.getElementById("task-priority").value = "Medium";
    }
});

// Function to mark a task complete or incomplete
function toggleComplete(id) {

    let task = myTasks.find(function(task) {
        return task.id === id;
    });

    if (task) {
        task.isCompleted = !task.isCompleted;

        displayTasks();

        console.log(JSON.stringify(myTasks));
    }
}

// Function to edit a task
function editTask(id) {

    let task = myTasks.find(function(task) {
        return task.id === id;
    });

    if (task) {
        let updatedName = prompt("Edit task name:", task.name);

        if (updatedName === null) {
            return;
        }

        if (updatedName.trim() !== "") {
            task.name = updatedName.trim();

            displayTasks();

            console.log(JSON.stringify(myTasks));
        } else {
            alert("Task name cannot be empty.");
        }
    }
}

// Function to delete one task
function deleteTask(id) {

    myTasks = myTasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();

    console.log(JSON.stringify(myTasks));
}

// Function to delete the entire task list
function deleteTaskList() {

    myTasks = [];

    displayTasks();

    console.log(JSON.stringify(myTasks));
}

// Run the delete list function when button is clicked
document.getElementById("delete-list").addEventListener("click", function() {
    deleteTaskList();
});