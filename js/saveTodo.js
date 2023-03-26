const saveTodo = (inputId) => {
    const inputTitle = document.getElementById(inputId).value;
    putItem("todos", {title: inputTitle, status: "unfinished"})
    inputTitle.value = "";

    location.reload();
}