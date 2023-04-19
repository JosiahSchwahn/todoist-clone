import { taskItem } from "./task";

export const project = ((name) => {

    let projectTasks = [];

    const getProjectName = () => {
        return name;
    }
    const setProjectName = (newName) =>{
        name = newName;
    }
      
    const addTask = (taskItem) => {
        projectTasks.push(taskItem);
    };

    const deleteTask = (taskItem) =>{
        projectTasks = projectTasks.filter((task) => task.getName() !== taskItem.getName())
    }



    const printTasks = () => {   
        for(let i = 0; i < projectTasks.length; i++){
            console.log(projectTasks[i].getName());
        }
    }

    return {addTask, deleteTask, printTasks, getProjectName}

});
