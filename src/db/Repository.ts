import { Db, MongoCallback, MongoClient, MongoError } from 'mongodb';
import * as assert from 'assert';

// Connection URL
const url: string = 'mongodb://localhost:27017/mntn';

// Get the documents collection
const collection = (db: Db) => db.collection('test');

export const findDocuments = (callback: (error: MongoError, result: any[]) => void) =>
	wrapCall((error: MongoError, db: Db) =>
		collection(db)
			.find({})
			.toArray((error: MongoError, result: any[]) => {
				assert.equal(error, null);
				callback(error, result);
			})
	);

const wrapCall = (callback: (error: MongoError, db: Db) => void) => {
	return MongoClient.connect(url, (error: MongoError, db: Db) => {
		assert.equal(null, error);
		const result = callback(error, db);
		db.close();
		return result;
	})
}
