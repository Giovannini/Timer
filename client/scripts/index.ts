import { updateTaskList } from './tasks/commands';
import * as newTask from './tasks/newTask/commands';
import { NewTaskInput } from './tasks/newTask/NewTaskInput';


document.addEventListener('DOMContentLoaded', updateTaskList, false);
setInterval(updateTaskList, 20000);

document.addEventListener('keydown', (event: Event) => {
	const isNewTaskInputTheFocusedElement = document.activeElement === NewTaskInput;
	if (event.keyCode === 9 && !isNewTaskInputTheFocusedElement) newTask.focusNewTaskInput(event); // Tab
	if (event.keyCode === 78 && !isNewTaskInputTheFocusedElement) newTask.focusNewTaskInput(event); // Press N
}, true)

NewTaskInput.onkeypress = newTask.addNewTask;
