const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task.text, task.completed));
};

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    renderTask(taskText, false);
    saveTask(taskText, false);
    taskInput.value = "";
}

function renderTask(text, completed) {
    const li = document.createElement("li");
    li.textContent = text;
    if (completed) li.classList.add("completed");

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✅";
    completeBtn.onclick = () => {
        li.classList.toggle("completed");
        updateLocalStorage();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = () => {
        li.remove();
        updateLocalStorage();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);

    taskList.appendChild(li);
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
