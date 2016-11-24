
const tasksList = document.getElementById('tasks-list');
let _tasksName: string[] = [];

const removeAllElementsFromTaskList = () => {
	if (tasksList !== null) while (tasksList.childNodes.length > 1) {
		tasksList.removeChild(tasksList.firstChild);
	}
}

/*
<div class="task-info">
	<p class="task-name">Développement</p>
	<p class="task-time">0s</p>
</div>
*/
const createHTMLTaskInfo = (name: string) => {
	const taskInfo = document.createElement('div');
	taskInfo.className = "task-info";

	const taskName = document.createElement('p');
	taskName.className = "task-name";
	taskName.textContent = name;

	const taskTime = document.createElement('p');
	taskTime.className = "task-time"
	taskTime.textContent = "0s";

	taskInfo.appendChild(taskName)
	taskInfo.appendChild(taskTime)
	return taskInfo;
}

/*
<li class="task">
	<TaskInfo />
	<p class="task-button">Start</p>
</li>
*/
const createHTMLTask = (name: string) => {
	const li = document.createElement('li');
	li.className = "task";

	const taskInfo = createHTMLTaskInfo(name);
	const taskButton = document.createElement('p');
	taskButton.className = "task-button";
	taskButton.textContent = "Start";

	li.appendChild(taskInfo);
	li.appendChild(taskButton);
	return li;
}

interface Tasks { name: string }

const updateTaskList = (tasks: Tasks[]) => {
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
}


const loadTasks: () => void = () => fetch('/tasks')
	.then((res: Response) => res.json(), err => Promise.reject(err))
	.then(json => updateTaskList(json as Tasks[]), err => console.log(err));

document.addEventListener('DOMContentLoaded', loadTasks, false);

setInterval(loadTasks, 20000);
