

document.addEventListener('DOMContentLoaded', () => {
    const pendingCheckboxes = document.querySelectorAll('.pending-checkbox');
    const completedCheckboxes = document.querySelectorAll('.completed-checkbox');

    pendingCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                completedCheckboxes[index].checked = false;
            }
        });
    });

    completedCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                pendingCheckboxes[index].checked = false;
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Add Person" button
    document.getElementById('addPerson').addEventListener('click', function() {
        addPerson();
    });

    // Add event listener to the "Add Tasks" button
    document.getElementById('addTaskButton').addEventListener('click', function() {
        disableButtons();
        addTask();
        enableButtonsAfterDelay();
    });
});

function addPerson() {
    // Your logic to add a person
    let taskPersonInput = document.getElementById('taskPerson').value;
    console.log("Person Assigned:", taskPersonInput);
}

function addTask() {
    // Your logic to add a task
    let taskList = document.getElementById('taskList');
    let taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
        <div class="task">
            <span>Task for ${document.getElementById('taskPerson').value}</span>
            <input type="date">
            <input type="checkbox" class="pending">
            <input type="checkbox" class="completed">
        </div>
    `;
    taskList.appendChild(taskDiv);
}

function disableButtons() {
    // Disable all buttons
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

function enableButtonsAfterDelay() {
    // Enable all buttons after 2 seconds
    setTimeout(() => {
        document.querySelectorAll('button').forEach(btn => btn.disabled = false);
    }, 2000); // Adjust the timeout as needed
}
