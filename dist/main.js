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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n\n\n\n\nconst taskOne = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Task One\")\nconst taskTwo = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Task Two\")\nconst taskThree = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.taskItem)(\"Task Three\")\n\nconst projectMain = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.project)(\"Project Main\");\n\ntaskTwo.setName(\"TASKTWOO\");\n\nprojectMain.addTask(taskOne);\nprojectMain.addTask(taskTwo);\nprojectMain.addTask(taskThree);\n\nprojectMain.printTasks();\n\n\nprojectMain.deleteTask(taskThree);\n\n\nprojectMain.printTasks();\nconsole.log(projectMain.getProjectName());\n\n\n\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nconst project = ((name) => {\n\n    let projectTasks = [];\n\n\n    const getProjectName = () => {\n        return name;\n    }\n\n    const setProjectName = (newName) =>{\n        name = newName;\n\n    }\n\n    const addTask = (taskItem) => {\n        projectTasks[projectTasks.length] = taskItem;\n    };\n\n    const deleteTask = (taskItem) =>{\n        projectTasks = projectTasks.filter((task) => task.getName() !== taskItem.getName())\n    }\n\n    const printTasks = () => {   \n        for(let i = 0; i < projectTasks.length; i++){\n            console.log(projectTasks[i].getName());\n        }\n    }\n\n    return {addTask, deleteTask, printTasks, getProjectName}\n});\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskItem\": () => (/* binding */ taskItem)\n/* harmony export */ });\n\nconst Priorities = {\n    Low: 'low',\n    Medium: 'medium',\n    High: 'high',\n    Critical: 'critical',\n  };\n\n\nconst taskItem = ((name) => {\n\n    //instance field of taskItems\n    let priority = Priorities.Low;\n    let description = \"Empty Description...\";\n    \n    const getName = () => {\n        return name\n    }\n\n    const setName = (newName) => {\n        name = newName;\n    }\n\n    const getPriority = () => {\n        return priority;\n    }\n\n    //can only accept to change a priority object.\n    const setPriority = (Priorities) => {\n        priority = Priorities;\n    }\n\n    const resetDescription = () =>{\n        description = \"\";\n    }\n\n    const editDescription = (newDescription) => {\n        resetDescription();\n        description = newDescription;\n    }\n\n    return {getName, setName, getPriority}\n\n});\n\n\n\n\n//# sourceURL=webpack://todoist-clone/./src/modules/task.js?");

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