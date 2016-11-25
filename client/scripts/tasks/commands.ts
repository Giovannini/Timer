import { tasksList } from './tasksList';
import { loadTasks } from '../api';
import { TasksList } from './TasksList';
import * as Task from './task/Task';


let _tasksName: string[] = [];

export const updateTaskList = () => loadTasks().then(tasks => {
	const tasksName = tasks.map(task => task.name);
	if (!isEqualToTasksName(tasksName) && TasksList !== null) {
		removeAllElementsFromTaskList();
		const newTaskLi = TasksList.lastChild;
		tasks.map(task => {
			console.log(task);
			const taskElement = Task.create(task);
			TasksList.insertBefore(taskElement, newTaskLi);
		})
		_tasksName = tasksName;
	}
}, err => console.log(err));

// Private

const isEqualToTasksName = (tasksName: string[]) => {
	for (let i = 0, l = tasksName.length; i < l; i++) {
		if (tasksName[i] !== _tasksName[i]) return false
	}
	return true;
}

const removeAllElementsFromTaskList = () => {
	if (TasksList !== null) while (TasksList.childNodes.length > 1) {
		TasksList.removeChild(TasksList.firstChild);
	}
}
