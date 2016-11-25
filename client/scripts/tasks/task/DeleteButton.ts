import { deleteTask } from '../../api';
import { updateTaskList } from '../commands';

export const create = (id: string) => {
	const deleteButton = document.createElement('span');
	deleteButton.className = "delete-task";
	deleteButton.onclick = removeTask.bind(null, id);
	return deleteButton;
}

const removeTask = (id: string) => {
	console.log("Removing task " + id + ".");
	deleteTask(id).then(
		res => updateTaskList(),
		err => console.log(err)
	);
}
