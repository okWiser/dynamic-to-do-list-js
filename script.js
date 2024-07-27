document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task-btn'); // Include the add-task-btn element

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);
    addTaskButton.addEventListener('click', addTask); // Add event listener to the add-task-btn element

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    document.addEventListener('DOMContentLoaded', addTask);
});