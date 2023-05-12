/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UIController */ \"./src/modules/UIController.js\");\n\n\n\n\n\nconst main = (0,_modules_UIController__WEBPACK_IMPORTED_MODULE_0__.UIController)();\n\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/index.js?");

/***/ }),

/***/ "./src/modules/UIController.js":
/*!*************************************!*\
  !*** ./src/modules/UIController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIController\": () => (/* binding */ UIController)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _taskItemUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskItemUI */ \"./src/modules/taskItemUI.js\");\n/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskModal */ \"./src/modules/taskModal.js\");\n/* harmony import */ var _projectListUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectListUI */ \"./src/modules/projectListUI.js\");\n\n\n\n\n\n\n\n\n\nconst UIController = (todolist) => {\n\n    //main document selectors\n    const addTaskBtn = document.querySelector(`#add-task-btn`);\n    \n    //creates the modal using the modalCreator module\n    const modalContainer = document.querySelector(\".modal-container\");\n    modalContainer.appendChild((0,_taskModal__WEBPACK_IMPORTED_MODULE_4__.modalCreator)());\n    \n    //modal selectors\n    const modalAddTaskBtn = document.querySelector(`#modal-submit`);\n    const modalCancelBtn = document.querySelector(`#cancel-modal`);\n    const modal = document.querySelector(`form.rating`);\n\n    \n\n\n    const renderProjectTasks = () =>{    \n        const taskContainer = document.querySelector(\".project-task-items\");\n        taskContainer.innerHTML = '';\n        _todolist__WEBPACK_IMPORTED_MODULE_2__.toDoList.getLiveProject().getProjectArray().forEach(task => {\n            let taskElement = (0,_taskItemUI__WEBPACK_IMPORTED_MODULE_3__.taskItemUICreator)(task);\n            taskContainer.appendChild(taskElement);\n        });\n    }; \n\n    const renderProjectTitle = () =>{\n        const projectName = document.querySelector(`.project-name`);\n        projectName.innerHTML = _todolist__WEBPACK_IMPORTED_MODULE_2__.toDoList.getLiveProject().getProjectName();\n    }\n\n    const renderProjectList = () =>{\n        const projectListQuery = document.querySelector(\".project-list-items\");\n        let projectList = _todolist__WEBPACK_IMPORTED_MODULE_2__.toDoList.getProjectList();\n        projectListQuery.innerHTML = '';\n        for (let i = 0; i < projectList.length; i++){\n            let projectListItemElement = (0,_projectListUI__WEBPACK_IMPORTED_MODULE_5__.projectListElement)(projectList[i]);\n            projectListQuery.appendChild(projectListItemElement);\n        }\n    }\n\n    const deleteTaskItemListener = () =>{\n        const projectTaskItems = document.querySelectorAll(\"button.self-delete > svg\");\n        projectTaskItems.forEach((item) =>{\n            item.addEventListener(\"click\", (event) =>{\n                event.stopPropagation();      \n                // the item click call is the most messy code i've ever written. There has to be a better way to traverse \n                // the dom and access the task name than this. Essentially this reads the deleteSVG (delete button) of each task\n                // and returns the task name that can then be passed into our deleteTask inside of our project function to then finally\n                // re-render our task list with the deleted item. This is a common example of programming your self into a corner with\n                // implementation  of the project.\n                const itemClicked = event.target.parentNode.parentNode.parentNode.children[1].children[0].textContent;\n                _todolist__WEBPACK_IMPORTED_MODULE_2__.toDoList.getLiveProject().deleteTask(itemClicked);   \n                //after the item has been deleted, render the new list and add delete functionality to them again.\n                pageTaskEvent();\n            });\n        })    \n    };\n\n    const pageTaskEvent = () =>{\n        renderProjectTasks();\n        renderProjectList();\n        deleteTaskItemListener();\n    };\n\n\n    const onPageLoad = (() => {\n        renderProjectTasks(_todolist__WEBPACK_IMPORTED_MODULE_2__.toDoList.getLiveProject());\n        pageTaskEvent();\n    })();\n\n    // ~ event listener for adding a task in the modal - form needs to have a name and description to be added.\n     modalAddTaskBtn.addEventListener(\"click\", (e)=>{\n        e.preventDefault();\n        const formData = new FormData(modal);\n        if(formData.get('task-name') === ''){\n            alert(\"Task needs a name\");\n        }else if (formData.get('description') === ''){\n            alert(\"Task needs a description\");\n        }\n        else{\n            const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(formData.get('task-name'), formData.get('description'), formData.get('priority'));\n            _todolist__WEBPACK_IMPORTED_MODULE_2__.toDoList.getLiveProject().addTask(newTask);\n            //renders the new list\n            pageTaskEvent();\n            hideElement(e);\n        }\n    });\n\n    \n    //function to hide and clear the modal\n    const hideElement = (e) =>{\n        e.preventDefault();\n        modal.reset();\n        modal.style.display = \"none\";\n    };\n\n    //closes modal\n    modalCancelBtn.addEventListener(`click`, hideElement);    \n\n\n   //displays task modal\n    addTaskBtn.addEventListener(`click`, (e) => {\n        e.preventDefault();\n        modal.style.display = `flex`;\n    });\n\n\n\n    \n\n   \n\n   \n}\n\n\n\n\n  \n\n//# sourceURL=webpack://todoist-clone/./src/modules/UIController.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nconst project = ((name) => {\n\n    let projectTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Sample Task Name\", \"Sample Task Description\"), (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Sample Task Name #2\", \"Sample Task Description#2\"),  (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Sample Task Name #3\", \"Sample Task Description#3\")];\n\n    const getProjectName = () => {\n        return name;\n    }\n    const setProjectName = (newName) =>{\n        name = newName;\n    }\n\n    const getProjectArray = () =>{\n        return projectTasks;\n    }\n\n    const getAmountOfProjects = () =>{\n        return projectTasks.length;\n    }\n      \n    const addTask = (taskItem) => {\n        projectTasks.push(taskItem);\n    };\n\n    const deleteTask = (taskName) =>{\n        projectTasks = projectTasks.filter((task) => task.getName() !== taskName);\n    }\n\n    const printTasksNames = () => {   \n        for(let i = 0; i < projectTasks.length; i++){\n            console.log(projectTasks[i].getName());\n        }\n    }\n\n    return {addTask, deleteTask, printTasksNames, getProjectName, getProjectArray, getAmountOfProjects}\n\n});\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/projectListUI.js":
/*!**************************************!*\
  !*** ./src/modules/projectListUI.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectListElement\": () => (/* binding */ projectListElement)\n/* harmony export */ });\n/*\n <!-- ? SINGULAR ITEM-->\n    <div class=\"project-list-item\">\n        <div class=\"project-icon\">\n            <svg width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#1A8BB7\"/>\n            </svg>   \n        </div>\n        <button class=\"project-button\" id=\"project-button-one\">Project Two</button>       \n        <div class=\"project-counter\">15</div>\n    </div>\n\n\n*/\n\nconst projectListElement = (project) =>{\n    // Create the main container\n    const projectListItem = document.createElement('div');\n    projectListItem.classList.add('project-list-item');\n  \n    // Create the project icon container\n    const projectIcon = document.createElement('div');\n    projectIcon.classList.add('project-icon');\n  \n    // Create the SVG element\n    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    svg.setAttribute('width', '7');\n    svg.setAttribute('height', '7');\n    svg.setAttribute('viewBox', '0 0 7 7');\n    svg.setAttribute('fill', 'none');\n  \n    // Create the circle element\n    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\n    circle.setAttribute('cx', '3.5');\n    circle.setAttribute('cy', '3.5');\n    circle.setAttribute('r', '3.5');\n    // fill color determined by the label of the project ~ needs to be added to the project \n    circle.setAttribute('fill', '#1A8BB7');\n  \n    // Create the project button\n    const projectButton = document.createElement('button');\n    projectButton.classList.add('project-button');\n    projectButton.setAttribute('id', `project-button-`);\n    projectButton.textContent = project.getProjectName();\n  \n    // Create the project counter\n    const projectCounter = document.createElement('div');\n    projectCounter.classList.add('project-counter');\n    projectCounter.textContent = project.getAmountOfProjects();\n  \n    // Assemble the elements\n    svg.appendChild(circle);\n    projectIcon.appendChild(svg);\n    projectListItem.appendChild(projectIcon);\n    projectListItem.appendChild(projectButton);\n    projectListItem.appendChild(projectCounter);\n  \n    return projectListItem;\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/projectListUI.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItem\": () => (/* binding */ taskItem)\n/* harmony export */ });\n\n\nconst taskItem = ((name, taskDescription, prio) => {\n\n    //instance field of taskItems\n    let priority = prio;\n    let description = taskDescription;\n    \n    const getName = () => {\n        return name\n    }\n\n    const setName = (newName) => {\n        name = newName;\n    }\n\n    const getPriority = () => {\n        return priority;\n    }\n\n    //can only accept to change a priority object.\n    const setPriority = (Priorities) => {\n        priority = Priorities;\n    }\n\n    const resetDescription = () =>{\n        description = \"\";\n    }\n\n    const editDescription = (newDescription) => {\n        resetDescription();\n        description = newDescription;\n    }\n\n    const getDescription = () => {\n\n        return description;\n\n    }\n\n    return {getName, setName, getPriority, setPriority, editDescription, getDescription}\n\n});\n\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskItemUI.js":
/*!***********************************!*\
  !*** ./src/modules/taskItemUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItemUICreator\": () => (/* binding */ taskItemUICreator)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nconst taskItemUICreator = (taskItem) => {\n\n    const itemContainer = document.createElement(\"div\");\n    itemContainer.id = \"item-container\";\n\n    const priorityContainer = document.createElement(\"div\");\n    priorityContainer.classList.add(\"task-priority-container\");\n\n    const button = document.createElement(\"button\");\n\n    // create a new SVG element\n    const prioSVG = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n    prioSVG.setAttribute(\"width\", \"18\");\n    prioSVG.setAttribute(\"height\", \"18\");\n    prioSVG.setAttribute(\"viewBox\", \"0 0 12 12\");\n    prioSVG.setAttribute(\"fill\", \"none\");\n\n    // create a new circle element inside the SVG element\n    const circle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\n    circle.setAttribute(\"cx\", \"6\");\n    circle.setAttribute(\"cy\", \"6\");\n    circle.setAttribute(\"r\", \"5.5\");\n\n    if(taskItem.getPriority() === 'priority-1'){\n        circle.setAttribute(\"fill\", \"#3a2625\");\n        circle.setAttribute(\"stroke\", \"#ef7364\");   \n    } else if(taskItem.getPriority() === 'priority-2'){\n        circle.setAttribute(\"fill\", \"#352d22\");\n        circle.setAttribute(\"stroke\", \"#f68e0f\");  \n    } else if(taskItem.getPriority() === 'priority-3'){\n        circle.setAttribute(\"fill\", \"#343b45\");\n        circle.setAttribute(\"stroke\", \"#4299f9\");  \n    } else{\n        circle.setAttribute(\"fill\", \"#202020\");\n        circle.setAttribute(\"stroke\", \"#6d6d6d\");  \n    } \n\n    // append the circle element to the SVG element, and the SVG element to the button element\n    prioSVG.appendChild(circle);\n    button.appendChild(prioSVG);\n\n    // append the button element to the priority container\n    priorityContainer.appendChild(button);\n\n\n    const taskNameDescriptionContainer = document.createElement(\"div\");\n    taskNameDescriptionContainer.classList.add(\"task-name-description-container\");\n  \n    const taskName = document.createElement(\"div\");\n    taskName.classList.add(\"task-name\");\n    taskName.textContent = taskItem.getName();\n  \n    const taskDescription = document.createElement(\"div\");\n    taskDescription.classList.add(\"task-description\");\n    taskDescription.textContent = taskItem.getDescription();\n  \n    taskNameDescriptionContainer.appendChild(taskName);\n    taskNameDescriptionContainer.appendChild(taskDescription);\n  \n\n    const deleteTaskDeleteSelfButton = document.createElement(\"button\");\n    deleteTaskDeleteSelfButton.classList.add(\"self-delete\");\n        \n        // Create the SVG element\n    const exitSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    exitSVG.setAttribute('width', '20');\n    exitSVG.setAttribute('height', '20');\n    exitSVG.setAttribute('viewBox', '0 0 20 20');\n    exitSVG.setAttribute('fill', 'none');\n\n    // Create the path element\n    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n    path2.setAttribute('d', 'M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5ZM13 14.1667L10 11.1667L7 14.1667L5.83333 13L8.83333 10L5.83333 7L7 5.83333L10 8.83333L13 5.83333L14.1667 7L11.1667 10L14.1667 13L13 14.1667Z');\n    path2.setAttribute('fill', '#373737');\n\n\n\n  // Append the path to the SVG element\n    exitSVG.appendChild(path2);\n\n    deleteTaskDeleteSelfButton.appendChild(exitSVG);\n\n    itemContainer.appendChild(priorityContainer);\n    itemContainer.appendChild(taskNameDescriptionContainer);\n    itemContainer.appendChild(deleteTaskDeleteSelfButton)\n  \n     // return the item container\n    return itemContainer;\n\n\n}\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskItemUI.js?");

/***/ }),

/***/ "./src/modules/taskModal.js":
/*!**********************************!*\
  !*** ./src/modules/taskModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalCreator\": () => (/* binding */ modalCreator)\n/* harmony export */ });\n\n\nconst modalCreator = () => {\n   \n\n    // Create the form element\n    const form = document.createElement('form');\n    form.className = 'rating';\n\n    // Create the text input container\n    const textInputContainer = document.createElement('div');\n    textInputContainer.className = 'text-input-container';\n\n    // Create the task name input\n    const taskNameInput = document.createElement('input');\n    taskNameInput.required = true;\n    taskNameInput.type = 'text';\n    taskNameInput.id = 'task-name';\n    taskNameInput.name = 'task-name';\n    taskNameInput.placeholder = 'Task Name';\n\n    // Create the description input\n    const descriptionInput = document.createElement('input');\n    descriptionInput.required = true;\n    descriptionInput.type = 'text';\n    descriptionInput.id = 'description';\n    descriptionInput.name = 'description';\n    descriptionInput.placeholder = 'Description';\n\n    // Append the task name and description inputs to the text input container\n    textInputContainer.appendChild(taskNameInput);\n    textInputContainer.appendChild(descriptionInput);\n\n    //appends the text-input-container to the rating form\n    form.appendChild(textInputContainer);\n\n    //good through here\n\n    // Create the modal bottom div\n    const modalBottomDiv = document.createElement('div');\n    modalBottomDiv.className = 'modal-bottom';\n    form.appendChild(modalBottomDiv);\n\n\n    // Create the priority text span\n    const priorityTextSpan = document.createElement('span');\n    priorityTextSpan.className = 'priority-text';\n    priorityTextSpan.textContent = 'Priority:';\n    modalBottomDiv.appendChild(priorityTextSpan);\n\n    // Create the priority container div\n    const priorityContainerDiv = document.createElement('div');\n    priorityContainerDiv.className = 'priority-container';\n    modalBottomDiv.appendChild(priorityContainerDiv);\n\n    // Create the priority radio buttons\n    for (let i = 1; i <= 4; i++) {\n        const priorityLabel = document.createElement('label');\n        priorityLabel.setAttribute('for', `priority-${i}`);\n        priorityContainerDiv.appendChild(priorityLabel);\n\n\n        const priorityInput = document.createElement('input');\n        priorityInput.type = 'radio';\n        priorityInput.className = `priority-${i}`;\n        priorityInput.id = `radio-priority-${i}`;\n        priorityInput.name = 'priority';\n        priorityInput.value = `priority-${i}`;\n        priorityLabel.appendChild(priorityInput);\n\n        const prioritySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n        prioritySvg.setAttribute('viewBox', '0 0 10 15');\n        priorityLabel.appendChild(prioritySvg);\n\n        const priorityPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n        priorityPath.setAttribute(\"d\",\"M0.59375 0.625C0.71807 0.625 0.837299 0.674386 0.925206 0.762294C1.01311 0.850201 1.0625 0.96943 1.0625 1.09375V2.25L2.1375 2.035C3.16922 1.82857 4.23871 1.92673 5.21563 2.3175L5.34312 2.36813C6.31869 2.75847 7.39244 2.83151 8.41188 2.57688C8.52244 2.54924 8.63784 2.54716 8.74933 2.5708C8.86081 2.59444 8.96544 2.64318 9.05528 2.71331C9.14511 2.78344 9.21777 2.87312 9.26776 2.97553C9.31774 3.07795 9.34373 3.19041 9.34375 3.30438V7.90875C9.34375 8.31125 9.06938 8.6625 8.67875 8.76L8.545 8.79313C7.43908 9.06972 6.27412 8.99077 5.21563 8.5675C4.23891 8.17681 3.16964 8.07866 2.13812 8.285L1.0625 8.5V13.5938C1.0625 13.7181 1.01311 13.8373 0.925206 13.9252C0.837299 14.0131 0.71807 14.0625 0.59375 14.0625C0.46943 14.0625 0.350201 14.0131 0.262294 13.9252C0.174386 13.8373 0.125 13.7181 0.125 13.5938V1.09375C0.125 0.96943 0.174386 0.850201 0.262294 0.762294C0.350201 0.674386 0.46943 0.625 0.59375 0.625Z\");\n        prioritySvg.appendChild(priorityPath);\n\n    }\n\n\n    //modal button container - margin auto div\n\n    const modalBottomButtonContainer = document.createElement(\"div\");\n    modalBottomButtonContainer.setAttribute(\"id\", \"modal-bottom-button-container\");\n    modalBottomDiv.appendChild(modalBottomButtonContainer);\n\n\n    //cancel button \n    const cancelButton = document.createElement(\"button\");\n    cancelButton.textContent = \"Cancel\";\n\n    //setting cancel button attributes\n    cancelButton.setAttribute(\"id\",\"cancel-modal\");\n    \n\n    modalBottomButtonContainer.appendChild(cancelButton);\n\n\n\n    // Create the Add Task Button to Submit form data\n    const inputElement = document.createElement(\"button\");\n\n    inputElement.textContent = \"Add Task\";\n    // Set the attributes\n    inputElement.setAttribute(\"id\", \"modal-submit\");\n    inputElement.setAttribute(\"type\", \"submit\");\n    inputElement.setAttribute(\"value\", \"Add Task\");\n\n    modalBottomButtonContainer.appendChild(inputElement);\n\n\n\n    return form;\n\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskModal.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nconst toDoList = (() =>{\n\n    let projectList = [(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"First Project on Load\")];\n    let currentViewProject = 0;\n\n\n    const getLiveProject = () =>{\n        return projectList[currentViewProject];\n    }\n\n    const getProjectList = () => {\n        return projectList;\n    }\n    \n    const containsProject = (projectName) => {\n        //returns boolean if a project is apart of the todolist\n        return projectList.some((project) => project.getProjectName() === projectName)\n    }\n\n    const printProjectList = () => {\n        \n        for(let i = 0; i < projectList.length; i++){\n            console.log(projectList[i].getProjectName());\n        }\n    }\n\n    const addProject = (newProject) => {\n        projectList.push(newProject);\n    }\n\n    const getProjectViewNumber = () =>{\n        return currentViewProject\n    }\n\n    const setProjectViewNumber = (newView) =>{\n\n        currentViewProject = newView;\n    }\n\n    return {printProjectList, addProject, getProjectList, containsProject, getProjectViewNumber, setProjectViewNumber, getLiveProject}\n\n\n})();\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/todolist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;