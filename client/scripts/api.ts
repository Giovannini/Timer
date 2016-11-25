import { Task } from './model/task';

export const loadTasks: () => Promise<Task[]> = () => fetch('/tasks')
	.then((res: Response) => res.json(), err => Promise.reject(err))

export const addTask: (name: string) => Promise<any> = (name: string) => fetch('/task', {
	method: 'PUT',
	body: JSON.stringify({ name }),
	headers: new Headers({
		"Content-Type": "application/json"
	})
}).then((res: Response) => res.json(), err => Promise.reject(err))

export const deleteTask: (id: string) => Promise<void> = (id: string) => fetch('/task', {
	method: 'DELETE',
	body: JSON.stringify({ _id: id }),
	headers: new Headers({
		"Content-Type": "application/json"
	})
}).then((res: Response) => res.json(), err => Promise.reject(err))
