import { Db, MongoCallback, MongoClient, MongoError, Collection } from 'mongodb';
import * as assert from 'assert';
import * as apiResponses from '../api/responses';

// Connection URL
const url: string = 'mongodb://localhost:27017/timer';

// Get the documents collection
const collection = (db: Db) => db.collection('test');

export const findDocuments = (callback: (error: MongoError, result: any[]) => void) => {
	console.log('findDocuments');
	wrapCall((collection: Collection) =>
		collection
			.find({})
			.toArray((error: MongoError, result: any[]) => callback(error, result))
	);
};

export const insertDocument = (
	document: {},
	callback: (error: MongoError, result: any[]) => void
) => wrapCall((collection: Collection) => collection.insertOne(document, callback));

const wrapCall = (callback: (collection: Collection) => void) =>
	MongoClient.connect(url, (error: MongoError, db: Db) => {
		if (error !== null) return apiResponses.internalServerError(error);
		const result = callback(collection(db));
		db.close();
		return result;
	});
