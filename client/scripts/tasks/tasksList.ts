import { createHTMLTaskInfo, createHTMLTask } from './elements';
import { loadTasks } from '../api';

const tasksList = document.getElementById('tasks-list');
let _tasksName: string[] = [];

const removeAllElementsFromTaskList = () => {
	if (tasksList !== null) while (tasksList.childNodes.length > 1) {
		tasksList.removeChild(tasksList.firstChild);
	}
}

export const updateTaskList = () => loadTasks().then(tasks => {
	const tasksName = tasks.map(task => task.name);
	if (tasksName !== _tasksName && tasksList !== null) {
		removeAllElementsFromTaskList();
		const newTaskLi = tasksList.lastChild;
		tasksName.map(name => {
			const task = createHTMLTask(name);
			tasksList.insertBefore(task, newTaskLi);
		})
		_tasksName = tasksName;
	}
}, err => console.log(err));
