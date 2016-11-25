import { addTask } from '../../api';
import { NewTaskInput } from './NewTaskInput';
import { updateTaskList } from '../commands';


export const addNewTask = (e: Event) => {
	if (e.keyCode === 13) {
		const name = NewTaskInput.value.trim();
		if (name.length > 0) {
			addTask(name).then(
				res => {
					updateTaskList();
					NewTaskInput.value = "";
				},
				err => console.log(err)
			);

		}
	}
};
