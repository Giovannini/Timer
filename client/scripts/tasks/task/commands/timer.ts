const start = "Start";
const stop = "Stop";
const startClassName = "task-button start";
const stopClassName = "task-button stop";

const updateTime = (time: HTMLElement) => {
	timeValue += 1;
	time.textContent = timeValue + "s";
}

let scheduler: number;
let timeValue = 0;

export function toggleTimer(button: HTMLElement, time: HTMLElement, taskName: string) {
	const isTimerStarted = button.textContent === stop;

	if (isTimerStarted) {
		button.textContent = start;
		button.className = startClassName;
		clearInterval(scheduler);
		timeValue = 0;
		time.textContent = "0s";
	} else {
		stopAllOtherTimers();
		button.textContent = stop;
		scheduler = setInterval(updateTime.bind(null, time), 1000);
		button.className = stopClassName;
	}
}

const stopAllOtherTimers = () => {
	const startedButtons = document.getElementsByClassName(stopClassName);
	Array.prototype.map.call(startedButtons, button => {
		button.textContent = start;
		button.className = startClassName;
	});
	clearInterval(scheduler);
	timeValue = 0;
	const startedTimers = document.getElementsByClassName("task-time");
	Array.prototype.map.call(startedTimers, p => {
		p.textContent = "0s";
	});
}
