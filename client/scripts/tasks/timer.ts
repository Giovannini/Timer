import { socket } from '../socket';
const start = "Start";
const stop = "Stop";

let scheduler: number;
let timeValue = 0;

export function toggleTimer(button: HTMLElement, time: HTMLElement, taskName: string) {
	const isTimerStarted = button.textContent === stop;

	if (isTimerStarted) {
		button.textContent = start;
		button.className = "task-button start";
		clearInterval(scheduler);
		timeValue = 0;
		time.textContent = "0s";
	} else {
		button.textContent = stop;
		scheduler = setInterval(updateTime.bind(null, time), 1000);
		button.className = "task-button stop";
	}
}

const updateTime = (time: HTMLElement) => {
	timeValue += 1;
	time.textContent = timeValue + "s";
}
