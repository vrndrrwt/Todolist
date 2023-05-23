function addTask() {

    var taskInput = document.getElementById("taskInput");

    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {

        alert("Please enter a task.");

        return;

    }

    var newTask = document.createElement("li");

    newTask.innerHTML = '<span onclick="removeTask(this)">✖</span>' + taskInput.value;

    taskList.appendChild(newTask);

    taskInput.value = "";

}

function removeTask(task) {

    task.parentNode.remove();

}
