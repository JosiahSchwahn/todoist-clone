import { taskItem } from "./task";
import { project } from "./project";
import { toDoList } from "./todolist";
import { taskItemUICreator } from "./taskItemUI";
import { modalCreator } from "./taskModal";



export const UIController = (todolist) => {

   

    const taskContainer = document.querySelector(".project-task-items")
    const addTaskBtn = document.querySelector(`#add-task-btn`);


    const loadHomePage = (() =>{
        //creates addTaskModal
        const addTaskModal = modalCreator();
        taskContainer.appendChild(addTaskModal);  
    })();



    


    const renderProjectTasks = (project) =>{
        project.getProjectArray().forEach(task => {
            let taskElement = taskItemUICreator(task);
            taskContainer.appendChild(taskElement);
        });
    };  
   
    
    

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