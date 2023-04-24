import { taskItem } from "./task";

/*
    <div class="project-task-items">
                    <div id="item-container">
                        <div class="priority-container">
                            <button>
                                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="5.5" fill="#362D21" stroke="#F79619"/>
                                </svg>    
                            </button>
                        </div>
                        <div class="task-name-description-container">
                            <div class="task-name">Ridge Workout</div>
                            <div class="task-description">Chest and Back - Compound Focus Day</div>
                        </div>
                    </div>
                </div>
*/
/* this function is designed to create a new task Item in the Dom and return the element to be rendered */

export const taskItemUICreator = (taskItem) => {

    const projectTaskItems = document.createElement("div");
    projectTaskItems.classList.add("project-task-items");

    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";
  
    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");

    const button = document.createElement("button");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS("width", "18");
    svg.setAttributeNS("height", "18");
    svg.setAttributeNS("viewBox", "0 0 12 12");
    svg.setAttributeNS("fill", "none");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS("cx", "6");
    circle.setAttributeNS("cy", "6");
    circle.setAttributeNS("r", "5.5");
    circle.setAttributeNS("fill", "#362D21");
    circle.setAttributeNS("stroke", "#F79619");

    svg.appendChild(circle);
    button.appendChild(svg);
    priorityContainer.appendChild(button);

    const taskNameDescriptionContainer = document.createElement("div");
    taskNameDescriptionContainer.classList.add("task-name-description-container");
  
    const taskName = document.createElement("div");
    taskName.classList.add("task-name");
    taskName.textContent = taskItem.getName();
  
    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = taskItem.getDescription();
  
    taskNameDescriptionContainer.appendChild(taskName);
    taskNameDescriptionContainer.appendChild(taskDescription);
  
    itemContainer.appendChild(priorityContainer);
    itemContainer.appendChild(taskNameDescriptionContainer);
  
    projectTaskItems.appendChild(itemContainer);
  
    return projectTaskItems;


}

