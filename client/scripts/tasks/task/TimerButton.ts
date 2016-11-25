import { toggleTimer } from './commands/timer';

export const create = (taskTime: HTMLElement, name: string) => {
	const timerButton = document.createElement('p');
	timerButton.className = "task-button start";
	timerButton.textContent = "Start";
	timerButton.onclick = toggleTimer.bind({}, timerButton, taskTime, name);
	return timerButton
}
