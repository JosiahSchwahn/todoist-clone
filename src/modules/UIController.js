import { taskItem } from "./task";
import { project } from "./project";
import { toDoList } from "./todolist";
import { taskItemUICreator } from "./taskItemUI";
import { modalCreator } from "./taskModal";



export const UIController = (todolist) => {

    //main document selectors
    //
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

    const onPageLoad = (() => {
        renderProjectTitle();
        renderProjectTasks(toDoList.getLiveProject())
    })();

    

    //submit button ~ adds a task
     //add task // form submission.
     modal.addEventListener("submit", (e)=>{
        e.preventDefault();
        const formData = new FormData(modal);
        const newTask = taskItem(formData.get('task-name'), formData.get('description'));
        toDoList.getLiveProject().addTask(newTask);
        renderProjectTasks();

    });

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



   

   
}




  