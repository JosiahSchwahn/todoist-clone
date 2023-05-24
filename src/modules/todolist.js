import { taskItem } from "./task";
import { project } from "./project";

export const toDoList = (() =>{

    let projectList = [project("First Project on Load", "mint-green")];
    let currentViewProject = 0;

    const getLiveProject = () =>{
        return projectList[currentViewProject];
    }


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

    const setLiveProjectHome = () =>{
        currentViewProject = 0;
    }

    const addProject = (newProject) => {
        projectList.push(newProject);
    }

    const deleteProject = (projectToDelete) =>{
        projectList = projectList.filter(project => project !== projectToDelete);
    }

    const getProjectViewNumber = () =>{
        return currentViewProject
    }

    const setProjectViewNumber = (newView) =>{

        currentViewProject = newView;
    }

    return {printProjectList, addProject, getProjectList, containsProject, getProjectViewNumber, setProjectViewNumber, getLiveProject, deleteProject, setLiveProjectHome}


})();
