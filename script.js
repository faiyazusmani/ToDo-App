

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let taskCount = document.getElementById("taskCount");
let emptyState = document.getElementById("emptyState");

function updateTaskCount() {
    let tasks = text.querySelectorAll("ul").length;
    taskCount.textContent = tasks;
    
    if (tasks === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}

function Add() {
    if (inputs.value.trim() === "") {
        alert("Please enter a task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span class="task">${inputs.value}</span>
            <i class="fa-solid fa-pen-to-square edit" title="Edit task"></i>
            <i class="fa-solid fa-trash delete" title="Delete task"></i>`;
        text.prepend(newEle);
        inputs.value = "";
        inputs.focus();

        newEle.querySelector(".delete").addEventListener("click", function () {
            newEle.remove();
            updateTaskCount();
        });
        
        newEle.querySelector(".edit").addEventListener("click", function () {
            inputs.value = newEle.querySelector(".task").innerText;
            newEle.remove();
            inputs.focus();
            updateTaskCount();
        });
        
        updateTaskCount();
    }
}

inputs.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        Add();
    }
});

// Initialize
updateTaskCount();
