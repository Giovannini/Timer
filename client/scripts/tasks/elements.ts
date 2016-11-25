import { toggleTimer } from './timer';
/*
<div class="task-info">
	<p class="task-name">Développement</p>
	<p class="task-time">0s</p>
</div>
*/
export const createHTMLTaskInfo = (name: string) => {
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
	return [taskInfo, taskName, taskTime];
}

/*
<li class="task">
	<TaskInfo />
	<p class="task-button">Start</p>
</li>
*/
export const createHTMLTask = (name: string) => {
	const li = document.createElement('li');
	li.className = "task";

	const [taskInfo, _, taskTime] = createHTMLTaskInfo(name);
	const taskButton = document.createElement('p');
	taskButton.className = "task-button start";
	taskButton.textContent = "Start";
	taskButton.onclick = toggleTimer.bind({}, taskButton, taskTime, name);

	li.appendChild(taskInfo);
	li.appendChild(taskButton);
	return li;
}
