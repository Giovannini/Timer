import { updateTaskList } from './tasks/tasksList';
import { socket } from './socket';

document.addEventListener('DOMContentLoaded', updateTaskList, false);
setInterval(updateTaskList, 20000);

socket.on('connect', function() {
	console.log('Connected!');
});
