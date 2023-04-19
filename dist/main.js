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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todolist */ \"./src/modules/todolist.js\");\n\r\n\r\n\r\n\r\n\r\nconst taskOne = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Gym - Ridge Workout\");\r\nconst taskTwo = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"C4D creative work\");\r\nconst taskThree = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Read Essentilism\");\r\nconst taskFour = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Make your first CC TikTok\");\r\n\r\nconst dailyWork = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"Daily Work Flow\");\r\n\r\ndailyWork.addTask(taskOne);\r\ndailyWork.addTask(taskTwo);\r\ndailyWork.addTask(taskThree);\r\ndailyWork.addTask(taskFour);\r\n\r\ndailyWork.printTasks();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\r\n\r\nconst project = ((name) => {\r\n\r\n    let projectTasks = [];\r\n\r\n    const getProjectName = () => {\r\n        return name;\r\n    }\r\n    const setProjectName = (newName) =>{\r\n        name = newName;\r\n    }\r\n      \r\n    const addTask = (taskItem) => {\r\n        projectTasks.push(taskItem);\r\n    };\r\n\r\n    const deleteTask = (taskItem) =>{\r\n        projectTasks = projectTasks.filter((task) => task.getName() !== taskItem.getName())\r\n    }\r\n\r\n\r\n\r\n    const printTasks = () => {   \r\n        for(let i = 0; i < projectTasks.length; i++){\r\n            console.log(projectTasks[i].getName());\r\n        }\r\n    }\r\n\r\n    return {addTask, deleteTask, printTasks, getProjectName}\r\n\r\n});\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItem\": () => (/* binding */ taskItem)\n/* harmony export */ });\n\r\nconst Priorities = {\r\n    Low: 'low',\r\n    Medium: 'medium',\r\n    High: 'high',\r\n    Critical: 'critical',\r\n  };\r\n\r\n\r\nconst taskItem = ((name) => {\r\n\r\n    //instance field of taskItems\r\n    let priority = Priorities.Low;\r\n    let description = \"...\";\r\n    \r\n    const getName = () => {\r\n        return name\r\n    }\r\n\r\n    const setName = (newName) => {\r\n        name = newName;\r\n    }\r\n\r\n    const getPriority = () => {\r\n        return priority;\r\n    }\r\n\r\n    //can only accept to change a priority object.\r\n    const setPriority = (Priorities) => {\r\n        priority = Priorities;\r\n    }\r\n\r\n    const resetDescription = () =>{\r\n        description = \"\";\r\n    }\r\n\r\n    const editDescription = (newDescription) => {\r\n        resetDescription();\r\n        description = newDescription;\r\n    }\r\n\r\n    return {getName, setName, getPriority, setPriority, editDescription}\r\n\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\r\n\r\n\r\nconst toDoList = (() =>{\r\n\r\n    let projectList = [(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"default project\")];\r\n\r\n\r\n    const getProjectList = () => {\r\n        return projectList;\r\n    }\r\n    \r\n    const containsProject = (projectName) => {\r\n        //returns boolean if a project is apart of the todolist\r\n        return projectList.some((project) => project.getProjectName() === projectName)\r\n    }\r\n\r\n    const printProjectList = () => {\r\n        \r\n        for(let i = 0; i < projectList.length; i++){\r\n            console.log(projectList[i].getProjectName());\r\n        }\r\n    }\r\n\r\n    const addProject = (newProject) => {\r\n        projectList.push(newProject);\r\n    }\r\n\r\n    return {printProjectList, addProject, getProjectList, containsProject}\r\n\r\n\r\n});\r\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/todolist.js?");

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