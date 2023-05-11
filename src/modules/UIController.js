import { taskItem } from "./task";
import { project } from "./project";
import { toDoList } from "./todolist";
import { taskItemUICreator } from "./taskItemUI";
import { modalCreator } from "./taskModal";
import { projectListElement } from "./projectListUI";



export const UIController = (todolist) => {

    //main document selectors
    const addTaskBtn = document.querySelector(`#add-task-btn`);
    
    //creates the modal using the modalCreator module
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.appendChild(modalCreator());
    
    //modal selectors
    const modalAddTaskBtn = document.querySelector(`#modal-submit`);
    const modalCancelBtn = document.querySelector(`#cancel-modal`);
    const modal = document.querySelector(`form.rating`);

    


    const renderProjectTasks = () =>{    
        const taskContainer = document.querySelector(".project-task-items");
        taskContainer.innerHTML = '';
        toDoList.getLiveProject().getProjectArray().forEach(task => {
            let taskElement = taskItemUICreator(task);
            taskContainer.appendChild(taskElement);
        });
    }; 

    const renderProjectTitle = () =>{
        const projectName = document.querySelector(`.project-name`);
        projectName.innerHTML = toDoList.getLiveProject().getProjectName();
    }

    const renderProjectList = () =>{
        const projectListQuery = document.querySelector(".project-list-items");
        let projectList = toDoList.getProjectList();
        for (let i = 0; i < projectList.length; i++){
            let projectListItemElement = projectListElement(projectList[i]);
            projectListQuery.appendChild(projectListItemElement);
        }
    }

    //git

    const onPageLoad = (() => {
        renderProjectTitle();
        renderProjectList();
        renderProjectTasks(toDoList.getLiveProject());
        
    })();

    

    // ~ event listener for adding a task in the modal - form needs to have a name and description to be added.
     modalAddTaskBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        const formData = new FormData(modal);
        if(formData.get('task-name') === ''){
            alert("Task needs a name");
        }else if (formData.get('description') === ''){
            alert("Task needs a description");
        }
        else{
            const newTask = taskItem(formData.get('task-name'), formData.get('description'));
            toDoList.getLiveProject().addTask(newTask);
            renderProjectTasks();
            hideElement(e);
        }
    });
    
    //function to hide and clear the modal
    const hideElement = (e) =>{
        e.preventDefault();
        modal.reset();
        modal.style.display = "none";
    };

    //closes modal
    modalCancelBtn.addEventListener(`click`, hideElement);    


   //displays task modal
    addTaskBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        modal.style.display = `flex`;
    });


   

   

   
}




  