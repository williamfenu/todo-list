const getTodos = () => {
    const ul = document.getElementById("ul-todos");

    const todoList = getItems("todos");

    todoList.forEach(todo => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerHTML = todo.title;
        const div = document.createElement("div");
        div.setAttribute("class", "options")
        const input = document.createElement("input")
        input.setAttribute("type", "checkbox");

        input.onclick = () => addLineThroughWhenDone(todo);
        const button = document.createElement("button");
        button.innerHTML = 'x';
        button.onclick = () => removeTodo(todo.id);

        if(todo.status === 'done'){
            span.setAttribute("class", "line-through");
            input.checked = true;
        }

        div.append(input)
        div.append(button)
        li.append(span)
        li.appendChild(div);
        ul.appendChild(li);
    })
}