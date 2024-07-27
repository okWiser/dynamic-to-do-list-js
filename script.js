// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new li element
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign onclick event to remove button
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
            };

            // Append remove button to li element
            taskItem.appendChild(removeButton);

            // Append li element to task list
            taskList.appendChild(taskItem);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Prompt the user to enter a task
            alert('Please enter a task.');
        }
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke the addTask function on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', addTask);
});