import { Task } from './model/task';

export const loadTasks: () => Promise<Task[]> = () => fetch('/tasks')
	.then((res: Response) => res.json(), err => Promise.reject(err))
