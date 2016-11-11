/// <reference path="./_all.d.ts" />

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

class Server {
	public app: express.Application;

	public static bootstrap(): Server {
		return new Server();
	}

	constructor() {
		this.app = express();
	}
}

module.exports = Server.bootstrap().app;
