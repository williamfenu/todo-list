const getItems = (name) => {
    return JSON.parse(localStorage.getItem(name)) || [];
}

const putItemInArray = (name, item) => {
    const items = getItems(name);
    const availableId = getNextAvailableId(items);
    console.log(availableId)
    items.push({id: availableId, ...item});
    localStorage.setItem(name, JSON.stringify(items));
}

const getNextAvailableId = (items) => {
    let maxId = 0;

    if(items.length){
        maxId = items.reduce((currentMaxId, item) => item.id > currentMaxId ? item.id : currentMaxId, maxId);
    }

    return ++maxId;
}