import { taskItem } from "./task";

/*
    
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
                
*/
/* this function is designed to create a new task Item in the Dom and return the element to be rendered */

export const taskItemUICreator = (taskItem) => {

    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");

    const button = document.createElement("button");

    // create a new SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("fill", "none");

    // create a new circle element inside the SVG element
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "6");
    circle.setAttribute("cy", "6");
    circle.setAttribute("r", "5.5");
    circle.setAttribute("fill", "#362D21");
    circle.setAttribute("stroke", "#F79619");

        // append the circle element to the SVG element, and the SVG element to the button element
    svg.appendChild(circle);
    button.appendChild(svg);

    // append the button element to the priority container
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
  
     // return the item container
    return itemContainer;


}

