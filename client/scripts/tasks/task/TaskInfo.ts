/*
<div class="task-info">
	<p class="task-name">Développement</p>
	<p class="task-time">0s</p>
</div>
*/
export const create = (name: string) => {
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
