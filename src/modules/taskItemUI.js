import { taskItem } from "./task";

export const taskItemUICreator = (taskItem) => {

    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("task-priority-container");

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
  

    const deleteTaskDeleteSelfButton = document.createElement("button");
    deleteTaskDeleteSelfButton.classList.add("self-delete");
        
        // Create the SVG element
    const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 20 20');
    svg.setAttribute('fill', 'none');

    // Create the path element
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5ZM13 14.1667L10 11.1667L7 14.1667L5.83333 13L8.83333 10L5.83333 7L7 5.83333L10 8.83333L13 5.83333L14.1667 7L11.1667 10L14.1667 13L13 14.1667Z');
    path2.setAttribute('fill', '#BBBBBB');



  // Append the path to the SVG element
    svg2.appendChild(path2);

    deleteTaskDeleteSelfButton.appendChild(svg2);



    itemContainer.appendChild(priorityContainer);
    itemContainer.appendChild(taskNameDescriptionContainer);
    itemContainer.appendChild(deleteTaskDeleteSelfButton)
  
     // return the item container
    return itemContainer;


}

