/// <reference path="./_all.d.ts" />

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as indexRoute from './routes/index';

class Server {
	public app: express.Application;

	private config() { }

	private routes() {
		const router: express.Router = express.Router();
		const index = new indexRoute.Index();

		router.get('/', index.index.bind(index.index));

		this.app.use(router);
	}

	public static bootstrap(): Server {
		return new Server();
	}

	constructor() {
		this.app = express();

		this.config();
		this.routes();
	}
}

module.exports = Server.bootstrap().app;
