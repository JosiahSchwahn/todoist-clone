import { taskItem } from "./task";

export const project = ((name) => {

    let projectTasks = [taskItem("Sample Task Name", "Sample Task Description"), taskItem("Sample Task Name #2", "Sample Task Description#2"),  taskItem("Sample Task Name #3", "Sample Task Description#3")];

    const getProjectName = () => {
        return name;
    }
    const setProjectName = (newName) =>{
        name = newName;
    }

    const getProjectArray = () =>{
        return projectTasks;
    }

    const getAmountOfProjects = () =>{
        return projectTasks.length;
    }
      
    const addTask = (taskItem) => {
        projectTasks.push(taskItem);
    };

    const deleteTask = (taskItem) =>{
        projectTasks = projectTasks.filter((task) => task.getName() !== taskItem.getName())
    }

    const printTasksNames = () => {   
        for(let i = 0; i < projectTasks.length; i++){
            console.log(projectTasks[i].getName());
        }
    }

    return {addTask, deleteTask, printTasksNames, getProjectName, getProjectArray, getAmountOfProjects}

});
