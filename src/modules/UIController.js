import { taskItem } from "./task";
import { project } from "./project";
import { toDoList } from "./todolist";
import { taskItemUICreator } from "./taskItemUI";
import { modalCreator } from "./taskModal";



export const UIController = (todolist) => {

    //default selectors and hidden task modal is added to DOM

    //document selectors
    const taskContainer = document.querySelector(`.project-task-items`);
    const addTaskBtn = document.querySelector(`#add-task-btn`);
    const projectName = document.querySelector(`.project-name`);

    //creates the modal using the modalCreator module
    taskContainer.appendChild(modalCreator());
    
    //modal selectors
    const modalAddTaskBtn = document.querySelector(`#modal-submit`);
    const modalCancelBtn = document.querySelector(`#cancel-modal`);
    const modal = document.querySelector(`form.rating`);

    //project UI Tracker
    let projectViewNumber = toDoList.getProjectViewNumber();

    const renderProjectTasks = (project) =>{
        project.getProjectArray().forEach(task => {
            let taskElement = taskItemUICreator(task);
            taskContainer.appendChild(taskElement);
        });
    }; 

    const onPageLoad = (() => {
        console.log("Page loadedddd");
        //gets the current project we're viewing and gets the name of the project we're currently viewing.
        projectName.innerHTML = toDoList.getProjectList()[projectViewNumber].getProjectName();

        //loads tasks associated with current project we're viewing
        renderProjectTasks(toDoList.getProjectList()[projectViewNumber])

    })();


    //close task modal
    modalCancelBtn.addEventListener(`click`, (e)=> {
        e.preventDefault();
        modal.reset();
        modal.style.display = `none`;
    })

   //displays task modal
    addTaskBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        modal.style.display = `flex`;
    });


     

    const renderProjectList = (toDoList) =>{

    }

    
   
    
    

    return{renderProjectTasks}

}



 /*
    
    const taskItemOne = taskItem("JavaScript Programming", "Description");
    const taskItemTwo = taskItem("WorkOut", "Camden x Back and Bi workout");
    const taskItemThree = taskItem("Pick up Ava from Airport", "WE love it");

    const testProject = project("Test Project");
    testProject.addTask(taskItemOne);
    testProject.addTask(taskItemTwo);
    testProject.addTask(taskItemThree);
    testProject.printTasksNames();
    renderProjectTasks(testProject);
    */