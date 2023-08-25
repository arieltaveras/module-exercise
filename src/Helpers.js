const choice = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return choice[i];
}

const remove = (item, items) => {
    for(let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...item.slice(0,i), ...items.slice(i + 1)];
        }
    }
}

export {choice, remove};