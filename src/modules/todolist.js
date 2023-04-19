import { taskItem } from "./task";
import { project } from "./project";

export const toDoList = (() =>{

    let projectList = [project("default project")];


    const getProjectList = () => {
        return projectList;
    }
    
    const containsProject = (projectName) => {
        //returns boolean if a project is apart of the todolist
        return projectList.some((project) => project.getProjectName() === projectName)
    }

    const printProjectList = () => {
        
        for(let i = 0; i < projectList.length; i++){
            console.log(projectList[i].getProjectName());
        }
    }

    const addProject = (newProject) => {
        projectList.push(newProject);
    }

    return {printProjectList, addProject, getProjectList, containsProject}


});
