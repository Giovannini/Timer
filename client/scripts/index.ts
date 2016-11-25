import { updateTaskList } from './tasks/commands';
import * as newTask from './tasks/newTask/commands';
import { NewTaskInput } from './tasks/newTask/NewTaskInput';


document.addEventListener('DOMContentLoaded', updateTaskList, false);
setInterval(updateTaskList, 20000);

NewTaskInput.onkeypress = newTask.addNewTask;
