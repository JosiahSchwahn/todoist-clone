import { taskItem } from "./task";

export const taskItemUICreator = (taskItem) => {

    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("task-priority-container");

    const button = document.createElement("button");

    // create a new SVG element
    const prioSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    prioSVG.setAttribute("width", "18");
    prioSVG.setAttribute("height", "18");
    prioSVG.setAttribute("viewBox", "0 0 12 12");
    prioSVG.setAttribute("fill", "none");
    prioSVG.classList.add("task-element-priority-button");

    // create a new circle element inside the SVG element
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "6");
    circle.setAttribute("cy", "6");
    circle.setAttribute("r", "5.5");
    circle.id = "prio-ID";

    let svgColor;

    if(taskItem.getPriority() === 'priority-1'){
        svgColor = "#ef7364";
        circle.setAttribute("fill", "#3a2625");
        circle.setAttribute("stroke", svgColor);   
    } else if(taskItem.getPriority() === 'priority-2'){
        svgColor = "#f68e0f";
        circle.setAttribute("fill", "#352d22");
        circle.setAttribute("stroke", svgColor);  
    } else if(taskItem.getPriority() === 'priority-3'){
        svgColor = "#4299f9";
        circle.setAttribute("fill", "#343b45");
        circle.setAttribute("stroke", svgColor);  
    } else{
        svgColor = "#6d6d6d";
        circle.setAttribute("fill", "#202020");
        circle.setAttribute("stroke", svgColor);  
    } 

    const checkMarkSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    checkMarkSVG.classList.add("checkMark-SVG");
    checkMarkSVG.setAttributeNS(null, "width", "10");
    checkMarkSVG.setAttributeNS(null, "height", "10");
    checkMarkSVG.setAttributeNS(null, "viewBox", "0 0 16 16");
    checkMarkSVG.setAttributeNS(null, "fill", "none");

    var checkMarkPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    checkMarkPath.setAttributeNS(null, "d", "M7.71875 14.25L2.375 8.90624L3.21456 8.06668L7.71875 12.5703L15.7854 4.50418L16.625 5.34374L7.71875 14.25Z");
    checkMarkPath.setAttributeNS(null, "fill", svgColor);

    checkMarkSVG.appendChild(checkMarkPath);

    // append the circle element to the SVG element, and the SVG element to the button element
    prioSVG.appendChild(circle);
    button.appendChild(checkMarkSVG);
    button.appendChild(prioSVG);

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
    const exitSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    exitSVG.setAttribute('width', '20');
    exitSVG.setAttribute('height', '20');
    exitSVG.setAttribute('viewBox', '0 0 20 20');
    exitSVG.setAttribute('fill', 'none');

    // Create the path element
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5ZM13 14.1667L10 11.1667L7 14.1667L5.83333 13L8.83333 10L5.83333 7L7 5.83333L10 8.83333L13 5.83333L14.1667 7L11.1667 10L14.1667 13L13 14.1667Z');
    path2.setAttribute('fill', '#373737');



  // Append the path to the SVG element
    exitSVG.appendChild(path2);

    deleteTaskDeleteSelfButton.appendChild(exitSVG);

    itemContainer.appendChild(priorityContainer);
    itemContainer.appendChild(taskNameDescriptionContainer);
    itemContainer.appendChild(deleteTaskDeleteSelfButton)
  
     // return the item container
    return itemContainer;


}

