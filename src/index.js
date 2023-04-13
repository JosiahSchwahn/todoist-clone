import { taskItem } from "./modules/task";
import { project } from "./modules/project";


const taskOne = taskItem("heasdlo")
console.log(taskOne.getName());
console.log(taskOne.getName());

const projectOne = project("To do list");
projectOne.addTask(taskOne);
projectOne.printTasks();


