"use strict";

import * as express from 'express';
import * as path from 'path';
import { Db, MongoClient, MongoError } from 'mongodb';
import * as assert from 'assert';
import * as Repository from '../db/Repository';

module Route {
	export class Index {
		public index(
			req: express.Request,
			res: express.Response,
			next: express.NextFunction
		) { res.sendFile(path.join(`${__dirname}/../../index.html`)); }

		public data(
			req: express.Request,
			res: express.Response,
			next: express.NextFunction
		) { Repository.findDocuments((error, result) => res.json(result)); }
	}
}

export = Route;
