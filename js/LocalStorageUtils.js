const getItems = (name) => {
    return JSON.parse(localStorage.getItem(name)) || [];
}

const putItem = (name, item) => {
    const items = getItems(name);
    const availableId = getNextAvailableId(items);
    items.push({id: availableId, ...item});
    localStorage.setItem(name, JSON.stringify(items));
}

const updateItem = (name, updatedItem) => {
    const items = getItems(name);

    const indexItem = items.findIndex(item => item.id === updatedItem.id);

    items[indexItem] = updatedItem;
    putAll(name, items);
}

const deleteItem = (name, itemId) => {
    const items = getItems(name);

    const indexItem = items.findIndex(item => item.id === itemId);
    
    if(indexItem>= 0) {
        items.splice(indexItem, 1);
    }
    
    if(items.length) {
        putAll(name, items);
    }else {
        removeKey(name);
    }
}

const putAll = (name, items) => {
    localStorage.setItem(name, JSON.stringify(items));
}

const removeKey = (name) => {
    localStorage.removeItem(name)
}

const getNextAvailableId = (items) => {
    let maxId = 0;

    if(items.length){
        maxId = items.reduce((currentMaxId, item) => item.id > currentMaxId ? item.id : currentMaxId, maxId);
    }

    return ++maxId;
}