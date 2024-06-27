function addTask() {
    const taskPersonInput = document.getElementById('taskPerson');
    const taskList = document.getElementById('taskList');
    
    const person = taskPersonInput.value.trim();
  

    const taskRow = document.createElement('div');
    taskRow.className = 'task pending';
    
    const taskText = document.createElement('span');
    taskText.textContent = `Task for: ${person}`;

    const taskDate = document.createElement('input');
    taskDate.type = 'date';
    
    const taskStatusPending = document.createElement('input');
    taskStatusPending.type = 'checkbox';
    taskStatusPending.name = 'pending';
    taskStatusPending.addEventListener('change', () => {
        if (taskStatusPending.checked) {
            taskStatusCompleted.checked = false;
            taskRow.classList.remove('completed', 'past-due');
            taskRow.classList.add('pending');
        }
    });

    const taskStatusCompleted = document.createElement('input');
    taskStatusCompleted.type = 'checkbox';
    taskStatusCompleted.name = 'completed';
    taskStatusCompleted.addEventListener('change', () => {
        if (taskStatusCompleted.checked) {
            taskStatusPending.checked = false;
            taskRow.classList.remove('pending', 'past-due');
            taskRow.classList.add('completed');
        }
    });
    
    taskRow.append(taskText, taskDate, taskStatusPending, taskStatusCompleted);
    taskList.appendChild(taskRow);

    taskPersonInput.value = '';
}

function updateTaskStatus(taskRow, taskDate, isCompleted = false) {
    const now = new Date();
    const dueDate = new Date(taskDate.value);

    if (isCompleted) {
        taskRow.classList.remove('pending', 'past-due');
        taskRow.classList.add('completed');
    } else {
        if (now > dueDate) {
            taskRow.classList.remove('pending', 'completed');
            taskRow.classList.add('past-due');
        } else {
            taskRow.classList.remove('completed', 'past-due');
            taskRow.classList.add('pending');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.addEventListener('click', addTask);
});
