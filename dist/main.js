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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _modules_UIController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UIController */ \"./src/modules/UIController.js\");\n/* harmony import */ var _modules_taskItemUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/taskItemUI */ \"./src/modules/taskItemUI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = (0,_modules_UIController__WEBPACK_IMPORTED_MODULE_3__.UIController)();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/index.js?");

/***/ }),

/***/ "./src/modules/UIController.js":
/*!*************************************!*\
  !*** ./src/modules/UIController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIController\": () => (/* binding */ UIController)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _taskItemUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskItemUI */ \"./src/modules/taskItemUI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst UIController = (todolist) => {\r\n\r\n    const taskContainer = document.querySelector(\".project-task-items\")\r\n    const addTaskBtn = document.querySelector(`#add-task-btn`);\r\n\r\n    const renderTasks = (project) =>{\r\n        project.getProjectArray().forEach(task => {\r\n            let taskElement = (0,_taskItemUI__WEBPACK_IMPORTED_MODULE_3__.taskItemUICreator)(task);\r\n            taskContainer.appendChild(taskElement);\r\n        });\r\n    }\r\n\r\n    \r\n\r\n    /* test adding items */\r\n    const taskItemOne = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"JavaScript Programming\", \"Description\");\r\n    const taskItemTwo = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"WorkOut\", \"Camden x Back and Bi workout\");\r\n    const taskItemThree = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Pick up Ava from Airport\", \"WE love it\");\r\n\r\n    const testProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"Test Project\");\r\n    testProject.addTask(taskItemOne);\r\n    testProject.addTask(taskItemTwo);\r\n    \r\n    \r\n\r\n    testProject.printTasksNames();\r\n    renderTasks(testProject);\r\n    \r\n\r\n    \r\n\r\n    return{renderTasks}\r\n\r\n    \r\n\r\n}\n\n//# sourceURL=webpack://todoist-clone/./src/modules/UIController.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItemUICreator\": () => (/* binding */ taskItemUICreator)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\n/*\r\n    \r\n                    <div id=\"item-container\">\r\n                        <div class=\"priority-container\">\r\n                            <button>\r\n                                <svg width=\"18\" height=\"18\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <circle cx=\"6\" cy=\"6\" r=\"5.5\" fill=\"#362D21\" stroke=\"#F79619\"/>\r\n                                </svg>    \r\n                            </button>\r\n                        </div>\r\n                        <div class=\"task-name-description-container\">\r\n                            <div class=\"task-name\">Ridge Workout</div>\r\n                            <div class=\"task-description\">Chest and Back - Compound Focus Day</div>\r\n                        </div>\r\n                    </div>\r\n                \r\n*/\r\n/* this function is designed to create a new task Item in the Dom and return the element to be rendered */\r\n\r\nconst taskItemUICreator = (taskItem) => {\r\n\r\n    const itemContainer = document.createElement(\"div\");\r\n    itemContainer.id = \"item-container\";\r\n\r\n    const priorityContainer = document.createElement(\"div\");\r\n    priorityContainer.classList.add(\"priority-container\");\r\n\r\n    const button = document.createElement(\"button\");\r\n\r\n    // create a new SVG element\r\n    const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n    svg.setAttribute(\"width\", \"18\");\r\n    svg.setAttribute(\"height\", \"18\");\r\n    svg.setAttribute(\"viewBox\", \"0 0 12 12\");\r\n    svg.setAttribute(\"fill\", \"none\");\r\n\r\n    // create a new circle element inside the SVG element\r\n    const circle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\r\n    circle.setAttribute(\"cx\", \"6\");\r\n    circle.setAttribute(\"cy\", \"6\");\r\n    circle.setAttribute(\"r\", \"5.5\");\r\n    circle.setAttribute(\"fill\", \"#362D21\");\r\n    circle.setAttribute(\"stroke\", \"#F79619\");\r\n\r\n        // append the circle element to the SVG element, and the SVG element to the button element\r\n    svg.appendChild(circle);\r\n    button.appendChild(svg);\r\n\r\n    // append the button element to the priority container\r\n    priorityContainer.appendChild(button);\r\n\r\n\r\n    const taskNameDescriptionContainer = document.createElement(\"div\");\r\n    taskNameDescriptionContainer.classList.add(\"task-name-description-container\");\r\n  \r\n    const taskName = document.createElement(\"div\");\r\n    taskName.classList.add(\"task-name\");\r\n    taskName.textContent = taskItem.getName();\r\n  \r\n    const taskDescription = document.createElement(\"div\");\r\n    taskDescription.classList.add(\"task-description\");\r\n    taskDescription.textContent = taskItem.getDescription();\r\n  \r\n    taskNameDescriptionContainer.appendChild(taskName);\r\n    taskNameDescriptionContainer.appendChild(taskDescription);\r\n  \r\n    itemContainer.appendChild(priorityContainer);\r\n    itemContainer.appendChild(taskNameDescriptionContainer);\r\n  \r\n     // return the item container\r\n    return itemContainer;\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/taskItemUI.js?");

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