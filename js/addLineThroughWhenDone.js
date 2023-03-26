const addLineThroughWhenDone = (todoItem) => {
    todoItem.status = todoItem.status === 'done' ? 'unfinished' : 'done'

    updateItem("todos", todoItem);

    location.reload();
}