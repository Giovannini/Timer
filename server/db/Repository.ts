import { Db, MongoCallback, MongoClient, MongoError, Collection } from 'mongodb';
import * as assert from 'assert';

// Connection URL
const url: string = 'mongodb://localhost:27017/timer';

// Get the documents collection
const collection = (db: Db) => db.collection('test');

export const findDocuments = (callback: (error: MongoError, result: any[]) => void) =>
	wrapCall((error: MongoError, collection: Collection) => {
		if (error !== null) return callback(error, []);
		return collection
			.find({})
			.toArray((error: MongoError, result: any[]) => callback(error, result))
	});

export const insertDocument = (
	document: {},
	callback: (error: MongoError, result: any[]) => void
) => wrapCall((error: MongoError, collection: Collection) => {
	if (error !== null) return callback(error, []);
	return collection.insertOne(document, callback)
});

const wrapCall = (callback: (error: MongoError, collection: Collection) => void) =>
	MongoClient.connect(url, (error: MongoError, db: Db) => {
		const result = callback(error, collection(db));
		db.close();
		return result;
	});
