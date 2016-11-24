"use strict";

import * as express from 'express';
import * as path from 'path';
import { Db, MongoClient, MongoError } from 'mongodb';
import * as assert from 'assert';
import * as Repository from '../db/Repository';
import * as apiResponses from '../api/responses';

export const newTask = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => Repository.insertDocument(req.body, (error, result) => {
	if (error === null) return res.json(apiResponses.created(result));
	return res.json(apiResponses.internalServerError(error));
});
