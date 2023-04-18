import { taskItem } from "./modules/task";
import { project } from "./modules/project";


const taskOne = taskItem("Task One")
const taskTwo = taskItem("Task Two")
const taskThree = taskItem("Task Three")

const projectMain = project("Project Main");

taskTwo.setName("TASKTWOO");

projectMain.addTask(taskOne);
projectMain.addTask(taskTwo);
projectMain.addTask(taskThree);

projectMain.printTasks();


projectMain.deleteTask(taskThree);


projectMain.printTasks();
console.log(projectMain.getProjectName());




