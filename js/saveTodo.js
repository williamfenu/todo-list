const saveTodo = () => {
    const inputTitle = document.getElementById('todo-title').value;
    putItemInArray("todos", {title: inputTitle, status: "unfinished"})
    inputTitle.value = "";

    location.reload();
}