export const taskItem = ((name) => {


    const getName = () => {return name}

    const setName = (newName) => {
        task = newName;
    }

    return {getName, setName}

});


