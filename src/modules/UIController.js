import { taskItem } from "./task";
import { project } from "./project";
import { toDoList } from "./todolist";
import { taskItemUICreator } from "./taskItemUI";
import { modalCreator } from "./taskModal";
import { projectListElement } from "./projectListUI";



export const UIController = (todolist) => {

    //main document selectors
    const addTaskBtn = document.querySelector(`#add-task-btn`);
    const editProjectButton = document.querySelector(`.project-name-edit-button`);
    
    //creates the modal using the modalCreator module
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.appendChild(modalCreator());
    
    //add task modal selectors
    const modalAddTaskBtn = document.querySelector(`#modal-submit`);
    const modalCancelBtn = document.querySelector(`#cancel-modal`);
    const modal = document.querySelector(`form.rating`);

    //edit project modal selectors
    const editProjectModal = document.querySelector(`.edit-project-modal-container`);
    const editProjectModalClose = document.querySelector(`.project-modal-close-button > svg`)
    


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

    //renders project list and adds eventListeners to all project elements
    const renderProjectList = () =>{
        const projectListContainer = document.querySelector(".project-list-items");
        let projectList = toDoList.getProjectList();
        projectListContainer.innerHTML = '';
        for (let i = 0; i < projectList.length; i++){
            let projectListItemElement = projectListElement(projectList[i]);
            projectListItemElement.setAttribute(`id`, `project-list-item-#${i}`);
            projectListContainer.appendChild(projectListItemElement);
        }
        //adds eventListener to all project list elements
        const projectListElements = document.querySelectorAll(".project-list-item");
        projectListElements.forEach((projectListElement) => {
            projectListElement.addEventListener("click", (e) => {
                //gets the id of the clicked element
                let id = e.target.parentNode.getAttribute("id");
                id = parseInt(id.charAt(id.length - 1));
                toDoList.setProjectViewNumber(id);
                pageTaskEvent();
            }); 
        });

        
    };

    const switchProjectView = () => {
        const projectListQuery = document.querySelector(".project-list-items");
        projectListQuery.innerHTML = '';
    }

    const deleteTaskItemListener = () =>{
        const projectTaskItems = document.querySelectorAll("button.self-delete > svg");
        projectTaskItems.forEach((item) =>{
            item.addEventListener("click", (event) =>{
                event.stopPropagation();      
                // the item click call is the most messy code i've ever written. There has to be a better way to traverse 
                // the dom and access the task name than this. Essentially this reads the deleteSVG (delete button) of each task
                // and returns the task name that can then be passed into our deleteTask inside of our project function to then finally
                // re-render our task list with the deleted item. This is a common example of programming your self into a corner with
                // implementation  of the project.
                const itemClicked = event.target.parentNode.parentNode.parentNode.children[1].children[0].textContent;
                toDoList.getLiveProject().deleteTask(itemClicked);   
                //after the item has been deleted, render the new list and add delete functionality to them again.
                pageTaskEvent();
            });
        })    
    };

    const pageTaskEvent = () =>{
        renderProjectTasks();
        renderProjectList();
        deleteTaskItemListener();
    };


    const onPageLoad = (() => {
        renderProjectTasks(toDoList.getLiveProject());
        pageTaskEvent();
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
            const newTask = taskItem(formData.get('task-name'), formData.get('description'), formData.get('priority'));
            toDoList.getLiveProject().addTask(newTask);
            //renders the new list
            pageTaskEvent();
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

    editProjectButton.addEventListener(`click`, (e) =>{
        e.preventDefault();
        editProjectModal.style.display = 'flex';
        
    });

    editProjectModalClose.addEventListener('click', (e) => {
        e.preventDefault();
        editProjectModal.style.display = 'none';
    });



    

   

   
}




  