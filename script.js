const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";

        li.classList.add("task-item");

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        li.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            li.remove();
        });
    }
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
