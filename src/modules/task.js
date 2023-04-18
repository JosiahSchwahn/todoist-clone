
const Priorities = {
    Low: 'low',
    Medium: 'medium',
    High: 'high',
    Critical: 'critical',
  };


export const taskItem = ((name) => {

    //instance field of taskItems
    let priority = Priorities.Low;
    let description = "Empty Description...";
    
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

    return {getName, setName, getPriority}

});


