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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UIController */ \"./src/modules/UIController.js\");\n\r\n\r\n\r\n\r\n\r\nconst main = (0,_modules_UIController__WEBPACK_IMPORTED_MODULE_0__.UIController)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/index.js?");

/***/ }),

/***/ "./src/modules/UIController.js":
/*!*************************************!*\
  !*** ./src/modules/UIController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIController\": () => (/* binding */ UIController)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _taskItemUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskItemUI */ \"./src/modules/taskItemUI.js\");\n/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskModal */ \"./src/modules/taskModal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst UIController = (todolist) => {\r\n\r\n   \r\n\r\n    const taskContainer = document.querySelector(\".project-task-items\")\r\n    const addTaskBtn = document.querySelector(`#add-task-btn`);\r\n\r\n\r\n    const loadHomePage = (() =>{\r\n        //creates addTaskModal\r\n        const addTaskModal = (0,_taskModal__WEBPACK_IMPORTED_MODULE_4__.modalCreator)();\r\n        taskContainer.appendChild(addTaskModal);  \r\n    })();\r\n\r\n\r\n\r\n    \r\n\r\n\r\n    const renderProjectTasks = (project) =>{\r\n        project.getProjectArray().forEach(task => {\r\n            let taskElement = (0,_taskItemUI__WEBPACK_IMPORTED_MODULE_3__.taskItemUICreator)(task);\r\n            taskContainer.appendChild(taskElement);\r\n        });\r\n    };  \r\n   \r\n    \r\n    \r\n\r\n    return{renderProjectTasks}\r\n\r\n}\r\n\r\n\r\n\r\n /*\r\n    \r\n    const taskItemOne = taskItem(\"JavaScript Programming\", \"Description\");\r\n    const taskItemTwo = taskItem(\"WorkOut\", \"Camden x Back and Bi workout\");\r\n    const taskItemThree = taskItem(\"Pick up Ava from Airport\", \"WE love it\");\r\n\r\n    const testProject = project(\"Test Project\");\r\n    testProject.addTask(taskItemOne);\r\n    testProject.addTask(taskItemTwo);\r\n    testProject.addTask(taskItemThree);\r\n    testProject.printTasksNames();\r\n    renderProjectTasks(testProject);\r\n    */\n\n//# sourceURL=webpack://todoist-clone/./src/modules/UIController.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\nconst project = ((name) => {\r\n\r\n    let projectTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Sample Task\", \"Sample Description\")];\r\n\r\n    const getProjectName = () => {\r\n        return name;\r\n    }\r\n    const setProjectName = (newName) =>{\r\n        name = newName;\r\n    }\r\n\r\n    const getProjectArray = () =>{\r\n        return projectTasks;\r\n    }\r\n      \r\n    const addTask = (taskItem) => {\r\n        projectTasks.push(taskItem);\r\n    };\r\n\r\n    const deleteTask = (taskItem) =>{\r\n        projectTasks = projectTasks.filter((task) => task.getName() !== taskItem.getName())\r\n    }\r\n\r\n    const printTasksNames = () => {   \r\n        for(let i = 0; i < projectTasks.length; i++){\r\n            console.log(projectTasks[i].getName());\r\n        }\r\n    }\r\n\r\n    return {addTask, deleteTask, printTasksNames, getProjectName, getProjectArray}\r\n\r\n});\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItem\": () => (/* binding */ taskItem)\n/* harmony export */ });\n\r\nconst Priorities = {\r\n    Low: 'low',\r\n    Medium: 'medium',\r\n    High: 'high',\r\n    Critical: 'critical',\r\n  };\r\n\r\n\r\nconst taskItem = ((name, taskDescription) => {\r\n\r\n    //instance field of taskItems\r\n    let priority = Priorities.Low;\r\n    let description = taskDescription;\r\n    \r\n    const getName = () => {\r\n        return name\r\n    }\r\n\r\n    const setName = (newName) => {\r\n        name = newName;\r\n    }\r\n\r\n    const getPriority = () => {\r\n        return priority;\r\n    }\r\n\r\n    //can only accept to change a priority object.\r\n    const setPriority = (Priorities) => {\r\n        priority = Priorities;\r\n    }\r\n\r\n    const resetDescription = () =>{\r\n        description = \"\";\r\n    }\r\n\r\n    const editDescription = (newDescription) => {\r\n        resetDescription();\r\n        description = newDescription;\r\n    }\r\n\r\n    const getDescription = () => {\r\n\r\n        return description;\r\n\r\n    }\r\n\r\n    return {getName, setName, getPriority, setPriority, editDescription, getDescription}\r\n\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskItemUI.js":
/*!***********************************!*\
  !*** ./src/modules/taskItemUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItemUICreator\": () => (/* binding */ taskItemUICreator)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\nconst taskItemUICreator = (taskItem) => {\r\n\r\n    const addTaskModal = document.createElement(\"div\");\r\n    addTaskModal.id = \"item-container\";\r\n\r\n    const priorityContainer = document.createElement(\"div\");\r\n    priorityContainer.classList.add(\"task-priority-container\");\r\n\r\n    const button = document.createElement(\"button\");\r\n\r\n    // create a new SVG element\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute(\"width\", \"18\");\r\n    svg.setAttribute(\"height\", \"18\");\r\n    svg.setAttribute(\"viewBox\", \"0 0 12 12\");\r\n    svg.setAttribute(\"fill\", \"none\");\r\n\r\n    // create a new circle element inside the SVG element\r\n    const circle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\r\n    circle.setAttribute(\"cx\", \"6\");\r\n    circle.setAttribute(\"cy\", \"6\");\r\n    circle.setAttribute(\"r\", \"5.5\");\r\n    circle.setAttribute(\"fill\", \"#362D21\");\r\n    circle.setAttribute(\"stroke\", \"#F79619\");\r\n\r\n        // append the circle element to the SVG element, and the SVG element to the button element\r\n    svg.appendChild(circle);\r\n    button.appendChild(svg);\r\n\r\n    // append the button element to the priority container\r\n    priorityContainer.appendChild(button);\r\n\r\n\r\n    const taskNameDescriptionContainer = document.createElement(\"div\");\r\n    taskNameDescriptionContainer.classList.add(\"task-name-description-container\");\r\n  \r\n    const taskName = document.createElement(\"div\");\r\n    taskName.classList.add(\"task-name\");\r\n    taskName.textContent = taskItem.getName();\r\n  \r\n    const taskDescription = document.createElement(\"div\");\r\n    taskDescription.classList.add(\"task-description\");\r\n    taskDescription.textContent = taskItem.getDescription();\r\n  \r\n    taskNameDescriptionContainer.appendChild(taskName);\r\n    taskNameDescriptionContainer.appendChild(taskDescription);\r\n  \r\n    addTaskModal.appendChild(priorityContainer);\r\n    addTaskModal.appendChild(taskNameDescriptionContainer);\r\n  \r\n     // return the item container\r\n    return addTaskModal;\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskItemUI.js?");

/***/ }),

/***/ "./src/modules/taskModal.js":
/*!**********************************!*\
  !*** ./src/modules/taskModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalCreator\": () => (/* binding */ modalCreator)\n/* harmony export */ });\n\r\n\r\nconst modalCreator = () => {\r\n     // Create the modal div\r\n    const modalDiv = document.createElement('div');\r\n    modalDiv.id = 'modal';\r\n\r\n    // Create the form element\r\n    const form = document.createElement('form');\r\n    form.className = 'rating';\r\n    modalDiv.appendChild(form);\r\n\r\n    // Create the text input container\r\n    const textInputContainer = document.createElement('div');\r\n    textInputContainer.className = 'text-input-container';\r\n\r\n    // Create the task name input\r\n    const taskNameInput = document.createElement('input');\r\n    taskNameInput.type = 'text';\r\n    taskNameInput.id = 'task-name';\r\n    taskNameInput.name = 'task-name';\r\n    taskNameInput.placeholder = 'Task Name';\r\n\r\n    // Create the description input\r\n    const descriptionInput = document.createElement('input');\r\n    descriptionInput.type = 'text';\r\n    descriptionInput.id = 'description';\r\n    descriptionInput.name = 'description';\r\n    descriptionInput.placeholder = 'Description';\r\n\r\n    // Append the task name and description inputs to the text input container\r\n    textInputContainer.appendChild(taskNameInput);\r\n    textInputContainer.appendChild(descriptionInput);\r\n\r\n    //appends the text-input-container to the rating form\r\n    form.appendChild(textInputContainer);\r\n\r\n    //good through here\r\n\r\n    // Create the modal bottom div\r\n    const modalBottomDiv = document.createElement('div');\r\n    modalBottomDiv.className = 'modal-bottom';\r\n    form.appendChild(modalBottomDiv);\r\n\r\n\r\n    // Create the priority text span\r\n    const priorityTextSpan = document.createElement('span');\r\n    priorityTextSpan.className = 'priority-text';\r\n    priorityTextSpan.textContent = 'Priority:';\r\n    modalBottomDiv.appendChild(priorityTextSpan);\r\n\r\n    // Create the priority container div\r\n    const priorityContainerDiv = document.createElement('div');\r\n    priorityContainerDiv.className = 'priority-container';\r\n    modalBottomDiv.appendChild(priorityContainerDiv);\r\n\r\n    // Create the priority radio buttons\r\n    for (let i = 1; i <= 4; i++) {\r\n        const priorityLabel = document.createElement('label');\r\n        priorityLabel.setAttribute('for', `priority-${i}`);\r\n        priorityContainerDiv.appendChild(priorityLabel);\r\n\r\n\r\n        const priorityInput = document.createElement('input');\r\n        priorityInput.type = 'radio';\r\n        priorityInput.className = `priority-${i}`;\r\n        priorityInput.id = `radio-priority-${i}`;\r\n        priorityInput.name = 'priority';\r\n        priorityInput.value = `priority-${i}`;\r\n        priorityLabel.appendChild(priorityInput);\r\n\r\n        const prioritySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n        prioritySvg.setAttribute('viewBox', '0 0 10 15');\r\n        priorityLabel.appendChild(prioritySvg);\r\n\r\n        const priorityPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');\r\n        priorityPath.setAttribute(\"d\",\"M0.59375 0.625C0.71807 0.625 0.837299 0.674386 0.925206 0.762294C1.01311 0.850201 1.0625 0.96943 1.0625 1.09375V2.25L2.1375 2.035C3.16922 1.82857 4.23871 1.92673 5.21563 2.3175L5.34312 2.36813C6.31869 2.75847 7.39244 2.83151 8.41188 2.57688C8.52244 2.54924 8.63784 2.54716 8.74933 2.5708C8.86081 2.59444 8.96544 2.64318 9.05528 2.71331C9.14511 2.78344 9.21777 2.87312 9.26776 2.97553C9.31774 3.07795 9.34373 3.19041 9.34375 3.30438V7.90875C9.34375 8.31125 9.06938 8.6625 8.67875 8.76L8.545 8.79313C7.43908 9.06972 6.27412 8.99077 5.21563 8.5675C4.23891 8.17681 3.16964 8.07866 2.13812 8.285L1.0625 8.5V13.5938C1.0625 13.7181 1.01311 13.8373 0.925206 13.9252C0.837299 14.0131 0.71807 14.0625 0.59375 14.0625C0.46943 14.0625 0.350201 14.0131 0.262294 13.9252C0.174386 13.8373 0.125 13.7181 0.125 13.5938V1.09375C0.125 0.96943 0.174386 0.850201 0.262294 0.762294C0.350201 0.674386 0.46943 0.625 0.59375 0.625Z\");\r\n        prioritySvg.appendChild(priorityPath);\r\n\r\n    }\r\n\r\n\r\n    //modal button container - margin auto div\r\n\r\n    const modalBottomButtonContainer = document.createElement(\"div\");\r\n    modalBottomButtonContainer.setAttribute(\"id\", \"modal-bottom-button-container\");\r\n    modalBottomDiv.appendChild(modalBottomButtonContainer);\r\n\r\n\r\n    //cancel button \r\n    const cancelButton = document.createElement(\"button\");\r\n    cancelButton.textContent = \"Cancel\";\r\n\r\n    //setting cancel button attributes\r\n    cancelButton.setAttribute(\"id\",\"cancel-modal\");\r\n    cancelButton.setAttribute(\"type\", \"cancel\");\r\n\r\n    modalBottomButtonContainer.appendChild(cancelButton);\r\n\r\n\r\n\r\n    // Create the Add Task Button to Submit form data\r\n    const inputElement = document.createElement(\"button\");\r\n\r\n    inputElement.textContent = \"Add Task\";\r\n    // Set the attributes\r\n    inputElement.setAttribute(\"id\", \"modal-submit\");\r\n    inputElement.setAttribute(\"type\", \"submit\");\r\n    inputElement.setAttribute(\"value\", \"Add Task\");\r\n\r\n    modalBottomButtonContainer.appendChild(inputElement);\r\n\r\n\r\n\r\n    return modalDiv;\r\n\r\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskModal.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\r\n\r\n\r\nconst toDoList = (() =>{\r\n\r\n    let projectList = [(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"Sample Project\")];\r\n\r\n\r\n    const getProjectList = () => {\r\n        return projectList;\r\n    }\r\n    \r\n    const containsProject = (projectName) => {\r\n        //returns boolean if a project is apart of the todolist\r\n        return projectList.some((project) => project.getProjectName() === projectName)\r\n    }\r\n\r\n    const printProjectList = () => {\r\n        \r\n        for(let i = 0; i < projectList.length; i++){\r\n            console.log(projectList[i].getProjectName());\r\n        }\r\n    }\r\n\r\n    const addProject = (newProject) => {\r\n        projectList.push(newProject);\r\n    }\r\n\r\n    return {printProjectList, addProject, getProjectList, containsProject}\r\n\r\n\r\n})();\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/todolist.js?");

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