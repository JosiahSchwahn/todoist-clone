import { taskItem } from "./modules/task";
import { project } from "./modules/project";
import { toDoList } from "./modules/todolist";


const taskOne = taskItem("Gym - Ridge Workout");
const taskTwo = taskItem("C4D creative work");
const taskThree = taskItem("Read Essentilism");
const taskFour = taskItem("Make your first CC TikTokkkk");

const dailyWork = project("Daily Work Flow");

dailyWork.addTask(taskOne);
dailyWork.addTask(taskTwo);
dailyWork.addTask(taskThree);
dailyWork.addTask(taskFour);

dailyWork.printTasks();







