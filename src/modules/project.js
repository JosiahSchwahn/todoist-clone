import { taskItem } from "./task";


const project_labels = {
    project_label_teal: 'teal',
    project_label_mint_green: 'mint-green',
    project_label_salamon: 'salamon',
    project_label_lavender: 'lavender',
    project_label_sunshine: "sunshine"
}


export const project = ((name, label) => {

    let projectTasks = [];
    let projectLabel = label || project_labels.project_label_teal;


    const getProjectName = () => {
        return name;
    }
    const setProjectName = (newName) =>{
        name = newName;
    }

    const getProjectArray = () =>{
        return projectTasks;
    }

    const getProjectLabel = () => {
        return projectLabel;
    }

    const setProjectLabel = (newLabel) => {
        projectLabel = newLabel;
    }

    const getAmountOfProjects = () =>{
        return projectTasks.length;
    }
      
    const addTask = (taskItem) => {
        projectTasks.push(taskItem);
    };

    const deleteTask = (taskName) =>{
        projectTasks = projectTasks.filter((task) => task.getName() !== taskName);
    }

    return {addTask, deleteTask, getProjectName, getProjectArray, getAmountOfProjects, setProjectName, getProjectLabel, setProjectLabel}

});
