const removeTodo = (itemId) => {
    deleteItem("todos", itemId);

    location.reload();
}