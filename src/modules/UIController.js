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

    
    //creates the modal using the modalCreator module (smaller modals are in HTML document)
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.appendChild(modalCreator());
    
    //add task modal selectors
    const modalAddTaskBtn = document.querySelector(`#modal-submit`);
    const modalCancelBtn = document.querySelector(`#cancel-modal`);
    const modal = document.querySelector(`form.rating`);

    //edit project modal selectors
    const editProjectModal = document.querySelector(`.edit-project-modal-container`);
    const editProjectModalClose = document.querySelector(`.project-modal-close-button > svg`);
    const editProjectSaveButton = document.querySelector(`button.project-save`);
    const editProjectNameField = document.querySelector(`input#edit-project-modal-input`);
    const editProjectDeleteButton = document.querySelector(`button.delete-project`);

    //add project modal selectors

    const addProjectForm = document.querySelector(`form#add-project-form`);
    const addProjectButton = document.querySelector(`div.add-project > svg`);
    const closeNewProjectButton = document.querySelector(`button#cancel-new-project-button`);
    const addNewProjectButton = document.querySelector(`button#submit-new-project-button`);
    
    //header buttons and project tab selectors
    const projectTabHamburgerButton = document.querySelector(`svg#hamburger`);
    const homeButton = document.querySelector(`svg#house`);


    // Clears the current viewed task and items and renders the current live viewed project 
    // by generating taskUI elements and adds them to the project task item to be viewed
    const renderProjectTasks = () =>{    
        const taskContainer = document.querySelector(".project-task-items");
        taskContainer.innerHTML = '';
        toDoList.getLiveProject().getProjectArray().forEach(task => {
            let taskElement = taskItemUICreator(task);
            taskContainer.appendChild(taskElement);
        });
    }; 

    //clears and renders the current live project title
    const renderProjectTitle = () => {
        const projectName = document.querySelector(`.project-name`);
        //clears the HTML to be rerendered
        projectName.innerHTML = '';
        const getLiveProjectName = toDoList.getLiveProject().getProjectName();
        projectName.innerHTML = getLiveProjectName;
    }

    const renderProjectCounter = () => {
        const projectCounter = document.querySelector(`div.project-number-counter`);
        projectCounter.innerHTML = `${toDoList.getProjectList().length} out of 10`;
    }

    //clears and renders project list and then adds eventListeners to all project elements
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
                let id2 = e.target.getAttribute("id");
                // depending where the user clicks on the project button
                // both use cases are covered...
                if(id){
                    id = parseInt(id.charAt(id.length - 1));
                    toDoList.setProjectViewNumber(id);
                    pageTaskEvent();
                } else{
                    id2 = parseInt(id2.charAt(id2.length - 1));
                    toDoList.setProjectViewNumber(id2);
                    pageTaskEvent();
                }
                
            }); 
        });

        
    };
    
    // EventListener for all current live project task items that listens to what 
    // task item delete button was clicked, removes the task from the current live project
    // then updates all the relative views.
    const deleteTaskItemListener = () =>{
        const projectTaskItems = document.querySelectorAll("button.self-delete > svg");
        const priorityTaskDelete = document.querySelectorAll(`svg.checkMark-SVG`);
        const deleteButtons = [...projectTaskItems, ...priorityTaskDelete];

        deleteButtons.forEach((item) =>{
            item.addEventListener("click", (event) =>{
                event.stopPropagation();      
                // The itemClicked variable is the most messy code i've ever written. There has to be a better way to traverse 
                // the dom and access the task name than this. Essentially this reads the deleteSVG (delete button) event of each task
                // and returns the task name of the item that was click. That value then can be passed into our deleteTask inside of 
                // our project module. Then finally re-render our task list with the deleted item. This is a common example of programming 
                //your self into a corner with implementation  of the project.
                const itemClicked = event.target.parentNode.parentNode.parentNode.children[1].children[0].textContent;
                console.log(itemClicked);
                toDoList.getLiveProject().deleteTask(itemClicked);   
                //after the item has been deleted, render the new list and add delete functionality to them again.
                pageTaskEvent();
            });
        });
    }

    //renders application
    const pageTaskEvent = () =>{
        renderProjectCounter();
        renderProjectTasks();
        deleteTaskItemListener();
        renderProjectTitle();
        renderProjectList();
    };

    //Initial load of the project
    const onPageLoad = (() => {
        toDoList.getLiveProject().addTask(taskItem("First Task on Load", "Hello there!", "priority-1"))
        renderProjectTasks(toDoList.getLiveProject());
        pageTaskEvent();
    })();

    //function to hide and clear the modal
    const hideElement = (e) =>{
        e.preventDefault();
        modal.reset();
        modal.style.display = "none";
    };


    //! EVENT LISTENERS

    // ~ event listener for adding a task in the modal
    // form needs to have a name and description to be added.
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

    
    

    //close button for the add task modal
    modalCancelBtn.addEventListener(`click`, hideElement);    

   //displays the add task modal
    addTaskBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        modal.style.display = `flex`;
    });

    //edit project button opener
    editProjectButton.addEventListener(`click`, (e) =>{
        e.preventDefault();
        editProjectModal.style.display = 'flex';
        
    });
    //close the edit project modal
    editProjectModalClose.addEventListener('click', (e) => {
        e.preventDefault();
        const textField = document.querySelector(`input#edit-project-modal-input`);
        textField.value = '';
        editProjectModal.style.display = 'none';
    });

    //change project title 
    editProjectSaveButton.addEventListener('click', (e) => {
        let newProjectName = editProjectNameField.value;
        if(newProjectName === ''){
            alert('Project name is required');
        } else{
            toDoList.getLiveProject().setProjectName(newProjectName);
            editProjectModal.style.display = 'none';
            pageTaskEvent();
            editProjectNameField.value = ""; 
        }
    });

    //delete project button
    editProjectDeleteButton.addEventListener(`click`, (e)=>{
        e.preventDefault();
        if(toDoList.getProjectList().length === 1){
            alert("You cant delete to zero projects, try again");
            editProjectModal.style.display = 'none';
        }else{
            alert(`deleting ${toDoList.getLiveProject().getProjectName()}`);
            toDoList.deleteProject(toDoList.getLiveProject());
            editProjectModal.style.display = 'none';
            toDoList.setLiveProjectHome();
            renderProjectList();
        }
        pageTaskEvent();
    });

    //open and close add project modal
    addProjectButton.addEventListener(`click`, (e) => {
        addProjectForm.style.display = 'flex';
    });

    closeNewProjectButton.addEventListener(`click`, (e) => {
        addProjectForm.style.display = 'none';
        const projectInputField = document.querySelector(`input#projectName`);
        projectInputField.value = ``; 
    });

    //adds a new project with name, color and a validation check
    addNewProjectButton.addEventListener(`click`, (e)  =>{
        e.preventDefault()
        const formData = new FormData(addProjectForm);
        if(formData.get('projectName') === '' ){
            alert("Project Name Field cannot be empty");
        } 
        else if(toDoList.getProjectList().length >= 10){
            alert("M10 Projects Max");
        }
        else{
            if(toDoList.containsProject(formData.get('projectName'))){
                alert("Project Already Exists");
                addProjectForm.style.display = 'none';
            }else{
                toDoList.addProject(project(formData.get('projectName'), formData.get('color')));
                addProjectForm.style.display = 'none';
                renderProjectList();
                renderProjectCounter();
            }
        }
    });

    //eventHandler for opening and closing the project tab
    projectTabHamburgerButton.addEventListener('click', () => {
        const projectViewContainer = document.querySelector(`#project-view-container`);
        let currentDisplay = window.getComputedStyle(projectViewContainer).display;
        if (currentDisplay === 'flex') {
            projectViewContainer.style.display = 'none';
        } else {
            projectViewContainer.style.display = 'flex';
        }
    });

    //eventHandler for home button
    homeButton.addEventListener(`click`, () => {
        toDoList.setLiveProjectHome();
        pageTaskEvent();
    });

    
}
