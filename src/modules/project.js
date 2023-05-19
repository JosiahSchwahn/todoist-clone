import { taskItem } from "./task";


const project_labels = {
    project_label_teal: 'teal',
    project_label_mint_green: 'mint-green',
    project_label_salamon: 'salamon',
    project_label_lavender: 'lavender',
    project_label_sunshine: "sunshine"
}


export const project = ((name, label) => {

    let projectTasks = [taskItem("Sample Task Name", "Sample Task Description","priority-1"), taskItem("Sample Task Name #2", "Sample Task Description #2","priority-2")];
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

    const getLiveProject = () =>{
        return projectList[currentViewProject];
    }

    const getProjectList = () => {
        return projectList;
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

    const printTasksNames = () => {   
        for(let i = 0; i < projectTasks.length; i++){
            console.log(projectTasks[i].getName());
        }
    }

    return {addTask, deleteTask, printTasksNames, getProjectName, getProjectArray, getAmountOfProjects, setProjectName, getProjectLabel,setProjectLabel}

});
