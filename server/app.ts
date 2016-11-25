import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as indexRoute from './routes/index';
import * as taskApi from './routes/taskApi';

class Server {
	public app: express.Application;

	private config() {
		this.app.use(express.static('public'));
		this.app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
		this.app.use(bodyParser.json()); // to support JSON-encoded bodies
	}

	private routes() {
		const router: express.Router = express.Router();

		router.get('/', indexRoute.index);
		router.get('/data', indexRoute.data);
		router.get('/tasks', taskApi.retrieveTasks);

		router.put('/task', taskApi.newTask);
		router.delete('/task', taskApi.deleteTask);

		this.app.use(router);
	}

	public static bootstrap(): Server {
		return new Server();
	}

	constructor() {
		this.app = express();

		console.log(this.app);
		this.config();
		console.log(this.app);
		this.routes();
	}
}

module.exports = Server.bootstrap().app;
