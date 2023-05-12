

export const taskItem = ((name, taskDescription, prio) => {

    //instance field of taskItems
    let priority = prio;
    let description = taskDescription;
    
    const getName = () => {
        return name
    }

    const setName = (newName) => {
        name = newName;
    }

    const getPriority = () => {
        return priority;
    }

    //can only accept to change a priority object.
    const setPriority = (Priorities) => {
        priority = Priorities;
    }

    const resetDescription = () =>{
        description = "";
    }

    const editDescription = (newDescription) => {
        resetDescription();
        description = newDescription;
    }

    const getDescription = () => {

        return description;

    }

    return {getName, setName, getPriority, setPriority, editDescription, getDescription}

});


