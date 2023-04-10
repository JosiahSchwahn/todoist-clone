import { taskItem } from "./task";

export const project = ((name) => {

    let projectTasks = [];

    const addTask = (taskItem) => {
        projectTasks[projectTasks.length] = taskItem;
    };

    const printTasks = () => {
        
        for(let i = 0; i < projectTasks.length; i++){
            console.log(projectTasks[i].getName());
        }
    }

    return {addTask, printTasks}
});
