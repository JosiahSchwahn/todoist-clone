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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIController\": () => (/* binding */ UIController)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _taskItemUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskItemUI */ \"./src/modules/taskItemUI.js\");\n\n\n\n\n\n\n\nconst UIController = (todolist) => {\n\n    const taskContainer = document.querySelector(\".project-task-items\")\n    const addTaskBtn = document.querySelector(`#add-task-btn`);\n\n    const renderTasks = (project) =>{\n        project.getProjectArray().forEach(task => {\n            let taskElement = (0,_taskItemUI__WEBPACK_IMPORTED_MODULE_3__.taskItemUICreator)(task);\n            taskContainer.appendChild(taskElement);\n        });\n    }\n\n    \n\n    /* test adding items */\n    const taskItemOne = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"JavaScript Programming\", \"Description\");\n    const taskItemTwo = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"WorkOut\", \"Camden x Back and Bi workout\");\n    const taskItemThree = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Pick up Ava from Airport\", \"WE love it\");\n\n    const testProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"Test Project\");\n    testProject.addTask(taskItemOne);\n    testProject.addTask(taskItemTwo);\n    testProject.addTask(taskItemThree);\n    \n    \n\n    testProject.printTasksNames();\n    renderTasks(testProject);\n    \n\n    \n\n    return{renderTasks}\n\n    \n\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/UIController.js?");

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