const inputBox = document.getElementById("input-box");
const listConteiner = document.getElementById("list-conteiner");

function clicked() {
    if (inputBox.value === '') {
        alert("Создайте задачу.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConteiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listConteiner.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listConteiner.innerHTML);
}

function showTask() {
    listConteiner.innerHTML = localStorage.getItem("data");
}

showTask();