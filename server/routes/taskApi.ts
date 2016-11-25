import * as express from 'express';
import * as path from 'path';
import { Db, MongoClient, MongoError } from 'mongodb';
import * as assert from 'assert';
import * as Repository from '../db/Repository';

export const newTask = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => Repository.insertDocument(req.body, (error, result) => {
	if (error === null) return res.status(201).json(result);
	return res.status(500).json(error);
});

export const retrieveTasks = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => Repository.findDocuments((error, result) => {
	if (error === null) return res.status(200).json(result);
	return res.status(500).json(error);
});
