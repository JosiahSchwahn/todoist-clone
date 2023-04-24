
const Priorities = {
    Low: 'low',
    Medium: 'medium',
    High: 'high',
    Critical: 'critical',
  };


export const taskItem = ((name) => {

    //instance field of taskItems
    let priority = Priorities.Low;
    let description = "...";
    
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


