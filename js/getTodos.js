const getTodos = () => {
    const ul = document.getElementById("ul-todos");

    const todoList = getItems("todos");

    todoList.forEach(todo => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerHTML = todo.title;
        span.setAttribute("id", "todo-title");
        const div = document.createElement("div");
        div.setAttribute("class", "options")
        const input = document.createElement("input")
        input.setAttribute("type", "checkbox");
        input.setAttribute("onClick", "addLineThroughWhenDone('todo-title')");
        const button = document.createElement("button");
        button.innerHTML = 'x';
        button.setAttribute("type", "submit");

        div.append(input)
        div.append(button)
        li.append(span)
        li.appendChild(div);
        ul.appendChild(li);
    })
}