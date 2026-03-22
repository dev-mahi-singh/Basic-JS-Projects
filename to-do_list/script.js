let task = document.querySelector("#task");
let addBtn = document.querySelector(".add-btn");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function () {

    let text = task.value.trim();

    if (text !== "") {

        let li = document.createElement("li");
        li.classList.add("todo-item");

        let label = document.createElement("label");
        label.classList.add("checkbox");

        let inp = document.createElement("input");
        inp.type = "checkbox";

        let span = document.createElement("span");
        span.classList.add("checkmark");

        let tasktext = document.createElement("span");
        tasktext.textContent = text;
        tasktext.classList.add("task-text");

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "✕";

        label.appendChild(inp);
        label.appendChild(span);

        li.appendChild(label);
        li.appendChild(tasktext);
        li.appendChild(deleteBtn);

        ul.appendChild(li);

        deleteBtn.addEventListener("click", function () {
            ul.removeChild(li);
        });

        span.addEventListener("click", function () {
            tasktext.classList.toggle("t");
        });

    }
    task.value = "";

});



