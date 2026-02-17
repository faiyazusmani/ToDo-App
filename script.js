
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <span class="task">${inputs.value}</span>
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash delete"></i>`;
        text.prepend(newEle);
        inputs.value = "";

        newEle.querySelector(".delete").addEventListener("click", function () {
            newEle.remove();
        });
        newEle.querySelector(".edit").addEventListener("click", function () {
            inputs.value = newEle.querySelector(".task").innerText;
            newEle.remove();
            inputs.focus();
        });
    }
}
inputs.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        Add();
    }
});
