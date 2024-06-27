

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




function addPerson() {
   
    let taskPersonInput = document.getElementById('taskPerson').value;
    console.log("Person Assigned:", taskPersonInput);
}

function addTask() {
  
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
   
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

function enableButtonsAfterDelay() {
    
    setTimeout(() => {
        document.querySelectorAll('button').forEach(btn => btn.disabled = false);
    }, 2000); 
}


