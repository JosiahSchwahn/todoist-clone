

export const modalCreator = () => {
   

    // Create the form element
    const form = document.createElement('form');
    form.className = 'rating';

    // Create the text input container
    const textInputContainer = document.createElement('div');
    textInputContainer.className = 'text-input-container';

    // Create the task name input
    const taskNameInput = document.createElement('input');
    taskNameInput.required = true;
    taskNameInput.type = 'text';
    taskNameInput.id = 'task-name';
    taskNameInput.name = 'task-name';
    taskNameInput.placeholder = 'Task Name';

    // Create the description input
    const descriptionInput = document.createElement('input');
    descriptionInput.required = true;
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';
    descriptionInput.placeholder = 'Description';

    // Append the task name and description inputs to the text input container
    textInputContainer.appendChild(taskNameInput);
    textInputContainer.appendChild(descriptionInput);

    //appends the text-input-container to the rating form
    form.appendChild(textInputContainer);

    //good through here

    // Create the modal bottom div
    const modalBottomDiv = document.createElement('div');
    modalBottomDiv.className = 'modal-bottom';
    form.appendChild(modalBottomDiv);


    // Create the priority text span
    const priorityTextSpan = document.createElement('span');
    priorityTextSpan.className = 'priority-text';
    priorityTextSpan.textContent = 'Priority:';
    modalBottomDiv.appendChild(priorityTextSpan);

    // Create the priority container div
    const priorityContainerDiv = document.createElement('div');
    priorityContainerDiv.className = 'priority-container';
    modalBottomDiv.appendChild(priorityContainerDiv);

    // Create the priority radio buttons
    for (let i = 1; i <= 4; i++) {
        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', `priority-${i}`);
        priorityContainerDiv.appendChild(priorityLabel);


        const priorityInput = document.createElement('input');
        priorityInput.type = 'radio';
        priorityInput.className = `priority-${i}`;
        priorityInput.id = `radio-priority-${i}`;
        priorityInput.name = 'priority';
        priorityInput.value = `priority-${i}`;
        priorityLabel.appendChild(priorityInput);

        const prioritySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        prioritySvg.setAttribute('viewBox', '0 0 10 15');
        priorityLabel.appendChild(prioritySvg);

        const priorityPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        priorityPath.setAttribute("d","M0.59375 0.625C0.71807 0.625 0.837299 0.674386 0.925206 0.762294C1.01311 0.850201 1.0625 0.96943 1.0625 1.09375V2.25L2.1375 2.035C3.16922 1.82857 4.23871 1.92673 5.21563 2.3175L5.34312 2.36813C6.31869 2.75847 7.39244 2.83151 8.41188 2.57688C8.52244 2.54924 8.63784 2.54716 8.74933 2.5708C8.86081 2.59444 8.96544 2.64318 9.05528 2.71331C9.14511 2.78344 9.21777 2.87312 9.26776 2.97553C9.31774 3.07795 9.34373 3.19041 9.34375 3.30438V7.90875C9.34375 8.31125 9.06938 8.6625 8.67875 8.76L8.545 8.79313C7.43908 9.06972 6.27412 8.99077 5.21563 8.5675C4.23891 8.17681 3.16964 8.07866 2.13812 8.285L1.0625 8.5V13.5938C1.0625 13.7181 1.01311 13.8373 0.925206 13.9252C0.837299 14.0131 0.71807 14.0625 0.59375 14.0625C0.46943 14.0625 0.350201 14.0131 0.262294 13.9252C0.174386 13.8373 0.125 13.7181 0.125 13.5938V1.09375C0.125 0.96943 0.174386 0.850201 0.262294 0.762294C0.350201 0.674386 0.46943 0.625 0.59375 0.625Z");
        prioritySvg.appendChild(priorityPath);

    }


    //modal button container - margin auto div

    const modalBottomButtonContainer = document.createElement("div");
    modalBottomButtonContainer.setAttribute("id", "modal-bottom-button-container");
    modalBottomDiv.appendChild(modalBottomButtonContainer);


    //cancel button 
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    //setting cancel button attributes
    cancelButton.setAttribute("id","cancel-modal");
    

    modalBottomButtonContainer.appendChild(cancelButton);



    // Create the Add Task Button to Submit form data
    const inputElement = document.createElement("button");

    inputElement.textContent = "Add Task";
    // Set the attributes
    inputElement.setAttribute("id", "modal-submit");
    inputElement.setAttribute("type", "submit");
    inputElement.setAttribute("value", "Add Task");

    modalBottomButtonContainer.appendChild(inputElement);



    return form;

}