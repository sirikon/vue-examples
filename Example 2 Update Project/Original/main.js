'use strict';

var taskNameInput = document.getElementById("task_name_input");
var saveTaskButton = document.getElementById("save_task_button");
var taskList = document.getElementById("task_list");

function addTask() {
    var taskName = taskNameInput.value;
    if (taskName === "") return;
    taskNameInput.value = "";
    var taskElement = document.createElement('li');
    taskElement.textContent = taskName;
    taskList.appendChild(taskElement);
}

saveTaskButton.addEventListener('click', addTask);
