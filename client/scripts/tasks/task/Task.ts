import * as TaskInfo from './TaskInfo';
import * as TimerButton from './TimerButton';
import * as DeleteButton from './DeleteButton';
import { Task } from '../../model/task';


export const create = (task: Task) => {
	const li = document.createElement('li');
	li.className = "task";

	const deleteButton = DeleteButton.create(task._id)
	const [taskInfo, _, taskTime] = TaskInfo.create(task.name);
	const taskButton = TimerButton.create(taskTime, task.name);

	li.appendChild(deleteButton);
	li.appendChild(taskInfo);
	li.appendChild(taskButton);

	return li;
}
