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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _modules_UIController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UIController */ \"./src/modules/UIController.js\");\n/* harmony import */ var _modules_taskItemUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/taskItemUI */ \"./src/modules/taskItemUI.js\");\n\n\n\n\n\n\n\n\nconst main = (0,_modules_UIController__WEBPACK_IMPORTED_MODULE_3__.UIController)();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/index.js?");

/***/ }),

/***/ "./src/modules/UIController.js":
/*!*************************************!*\
  !*** ./src/modules/UIController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIController\": () => (/* binding */ UIController)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _taskItemUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskItemUI */ \"./src/modules/taskItemUI.js\");\n/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskModal */ \"./src/modules/taskModal.js\");\n\n\n\n\n\n\n\n\nconst UIController = (todolist) => {\n\n    const taskContainer = document.querySelector(\".project-task-items\")\n    const addTaskBtn = document.querySelector(`#add-task-btn`);\n\n    const renderTasks = (project) =>{\n        project.getProjectArray().forEach(task => {\n            let taskElement = (0,_taskItemUI__WEBPACK_IMPORTED_MODULE_3__.taskItemUICreator)(task);\n            taskContainer.appendChild(taskElement);\n        });\n    }\n\n    \n\n    /*\n    \n    const taskItemOne = taskItem(\"JavaScript Programming\", \"Description\");\n    const taskItemTwo = taskItem(\"WorkOut\", \"Camden x Back and Bi workout\");\n    const taskItemThree = taskItem(\"Pick up Ava from Airport\", \"WE love it\");\n\n    const testProject = project(\"Test Project\");\n    testProject.addTask(taskItemOne);\n    testProject.addTask(taskItemTwo);\n    testProject.addTask(taskItemThree);\n    testProject.printTasksNames();\n    renderTasks(testProject);\n     */\n    const addTaskModal = (0,_taskModal__WEBPACK_IMPORTED_MODULE_4__.modalCreator)();\n    taskContainer.appendChild(addTaskModal);\n   \n    \n\n    return{renderTasks}\n\n    \n\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/UIController.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nconst project = ((name) => {\n\n    let projectTasks = [(0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Sample Task\", \"Sample Description\")];\n\n    const getProjectName = () => {\n        return name;\n    }\n    const setProjectName = (newName) =>{\n        name = newName;\n    }\n\n    const getProjectArray = () =>{\n        return projectTasks;\n    }\n      \n    const addTask = (taskItem) => {\n        projectTasks.push(taskItem);\n    };\n\n    const deleteTask = (taskItem) =>{\n        projectTasks = projectTasks.filter((task) => task.getName() !== taskItem.getName())\n    }\n\n    const printTasksNames = () => {   \n        for(let i = 0; i < projectTasks.length; i++){\n            console.log(projectTasks[i].getName());\n        }\n    }\n\n    return {addTask, deleteTask, printTasksNames, getProjectName, getProjectArray}\n\n});\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItem\": () => (/* binding */ taskItem)\n/* harmony export */ });\n\nconst Priorities = {\n    Low: 'low',\n    Medium: 'medium',\n    High: 'high',\n    Critical: 'critical',\n  };\n\n\nconst taskItem = ((name, taskDescription) => {\n\n    //instance field of taskItems\n    let priority = Priorities.Low;\n    let description = taskDescription;\n    \n    const getName = () => {\n        return name\n    }\n\n    const setName = (newName) => {\n        name = newName;\n    }\n\n    const getPriority = () => {\n        return priority;\n    }\n\n    //can only accept to change a priority object.\n    const setPriority = (Priorities) => {\n        priority = Priorities;\n    }\n\n    const resetDescription = () =>{\n        description = \"\";\n    }\n\n    const editDescription = (newDescription) => {\n        resetDescription();\n        description = newDescription;\n    }\n\n    const getDescription = () => {\n\n        return description;\n\n    }\n\n    return {getName, setName, getPriority, setPriority, editDescription, getDescription}\n\n});\n\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskItemUI.js":
/*!***********************************!*\
  !*** ./src/modules/taskItemUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItemUICreator\": () => (/* binding */ taskItemUICreator)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nconst taskItemUICreator = (taskItem) => {\n\n    const itemContainer = document.createElement(\"div\");\n    itemContainer.id = \"item-container\";\n\n    const priorityContainer = document.createElement(\"div\");\n    priorityContainer.classList.add(\"task-priority-container\");\n\n    const button = document.createElement(\"button\");\n\n    // create a new SVG element\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n    svg.setAttribute(\"width\", \"18\");\n    svg.setAttribute(\"height\", \"18\");\n    svg.setAttribute(\"viewBox\", \"0 0 12 12\");\n    svg.setAttribute(\"fill\", \"none\");\n\n    // create a new circle element inside the SVG element\n    const circle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\n    circle.setAttribute(\"cx\", \"6\");\n    circle.setAttribute(\"cy\", \"6\");\n    circle.setAttribute(\"r\", \"5.5\");\n    circle.setAttribute(\"fill\", \"#362D21\");\n    circle.setAttribute(\"stroke\", \"#F79619\");\n\n        // append the circle element to the SVG element, and the SVG element to the button element\n    svg.appendChild(circle);\n    button.appendChild(svg);\n\n    // append the button element to the priority container\n    priorityContainer.appendChild(button);\n\n\n    const taskNameDescriptionContainer = document.createElement(\"div\");\n    taskNameDescriptionContainer.classList.add(\"task-name-description-container\");\n  \n    const taskName = document.createElement(\"div\");\n    taskName.classList.add(\"task-name\");\n    taskName.textContent = taskItem.getName();\n  \n    const taskDescription = document.createElement(\"div\");\n    taskDescription.classList.add(\"task-description\");\n    taskDescription.textContent = taskItem.getDescription();\n  \n    taskNameDescriptionContainer.appendChild(taskName);\n    taskNameDescriptionContainer.appendChild(taskDescription);\n  \n    itemContainer.appendChild(priorityContainer);\n    itemContainer.appendChild(taskNameDescriptionContainer);\n  \n     // return the item container\n    return itemContainer;\n\n\n}\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskItemUI.js?");

/***/ }),

/***/ "./src/modules/taskModal.js":
/*!**********************************!*\
  !*** ./src/modules/taskModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalCreator\": () => (/* binding */ modalCreator)\n/* harmony export */ });\n\n\nconst modalCreator = () => {\n     // Create the modal div\n    const modalDiv = document.createElement('div');\n    modalDiv.id = 'modal';\n\n    // Create the form element\n    const form = document.createElement('form');\n    form.className = 'rating';\n    modalDiv.appendChild(form);\n\n    // Create the text input container\n    const textInputContainer = document.createElement('div');\n    textInputContainer.className = 'text-input-container';\n\n    // Create the task name input\n    const taskNameInput = document.createElement('input');\n    taskNameInput.type = 'text';\n    taskNameInput.id = 'task-name';\n    taskNameInput.name = 'task-name';\n    taskNameInput.placeholder = 'Task Name';\n\n    // Create the description input\n    const descriptionInput = document.createElement('input');\n    descriptionInput.type = 'text';\n    descriptionInput.id = 'description';\n    descriptionInput.name = 'description';\n    descriptionInput.placeholder = 'Description';\n\n    // Append the task name and description inputs to the text input container\n    textInputContainer.appendChild(taskNameInput);\n    textInputContainer.appendChild(descriptionInput);\n\n    //appends the text-input-container to the rating form\n    form.appendChild(textInputContainer);\n\n    //good through here\n\n    // Create the modal bottom div\n    const modalBottomDiv = document.createElement('div');\n    modalBottomDiv.className = 'modal-bottom';\n    form.appendChild(modalBottomDiv);\n\n\n    // Create the priority text span\n    const priorityTextSpan = document.createElement('span');\n    priorityTextSpan.className = 'priority-text';\n    priorityTextSpan.textContent = 'Priority:';\n    modalBottomDiv.appendChild(priorityTextSpan);\n\n    // Create the priority container div\n    const priorityContainerDiv = document.createElement('div');\n    priorityContainerDiv.className = 'priority-container';\n    modalBottomDiv.appendChild(priorityContainerDiv);\n\n    // Create the priority radio buttons\n    for (let i = 1; i <= 4; i++) {\n        const priorityLabel = document.createElement('label');\n        priorityLabel.setAttribute('for', `priority-${i}`);\n        priorityContainerDiv.appendChild(priorityLabel);\n\n\n        const priorityInput = document.createElement('input');\n        priorityInput.type = 'radio';\n        priorityInput.className = `priority-${i}`;\n        priorityInput.id = `radio-priority-${i}`;\n        priorityInput.name = 'priority';\n        priorityInput.value = `priority-${i}`;\n        priorityLabel.appendChild(priorityInput);\n\n        const prioritySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n        prioritySvg.setAttribute('viewBox', '0 0 10 15');\n        priorityLabel.appendChild(prioritySvg);\n\n        const priorityPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n        priorityPath.setAttribute(\"d\",\"M0.59375 0.625C0.71807 0.625 0.837299 0.674386 0.925206 0.762294C1.01311 0.850201 1.0625 0.96943 1.0625 1.09375V2.25L2.1375 2.035C3.16922 1.82857 4.23871 1.92673 5.21563 2.3175L5.34312 2.36813C6.31869 2.75847 7.39244 2.83151 8.41188 2.57688C8.52244 2.54924 8.63784 2.54716 8.74933 2.5708C8.86081 2.59444 8.96544 2.64318 9.05528 2.71331C9.14511 2.78344 9.21777 2.87312 9.26776 2.97553C9.31774 3.07795 9.34373 3.19041 9.34375 3.30438V7.90875C9.34375 8.31125 9.06938 8.6625 8.67875 8.76L8.545 8.79313C7.43908 9.06972 6.27412 8.99077 5.21563 8.5675C4.23891 8.17681 3.16964 8.07866 2.13812 8.285L1.0625 8.5V13.5938C1.0625 13.7181 1.01311 13.8373 0.925206 13.9252C0.837299 14.0131 0.71807 14.0625 0.59375 14.0625C0.46943 14.0625 0.350201 14.0131 0.262294 13.9252C0.174386 13.8373 0.125 13.7181 0.125 13.5938V1.09375C0.125 0.96943 0.174386 0.850201 0.262294 0.762294C0.350201 0.674386 0.46943 0.625 0.59375 0.625Z\");\n        priorityLabel.appendChild(priorityPath);\n\n    }\n\n    return modalDiv;\n\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskModal.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nconst toDoList = (() =>{\n\n    let projectList = [(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"Sample Project\")];\n\n\n    const getProjectList = () => {\n        return projectList;\n    }\n    \n    const containsProject = (projectName) => {\n        //returns boolean if a project is apart of the todolist\n        return projectList.some((project) => project.getProjectName() === projectName)\n    }\n\n    const printProjectList = () => {\n        \n        for(let i = 0; i < projectList.length; i++){\n            console.log(projectList[i].getProjectName());\n        }\n    }\n\n    const addProject = (newProject) => {\n        projectList.push(newProject);\n    }\n\n    return {printProjectList, addProject, getProjectList, containsProject}\n\n\n})();\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/todolist.js?");

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