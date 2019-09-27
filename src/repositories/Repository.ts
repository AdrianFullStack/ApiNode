import { MongoClient, Db, Collection, InsertOneWriteOpResult } from 'mongodb';

import { IWrite } from '../contracts/IWrite';
import { IRead } from '../contracts/IRead';

export abstract class Repository<T> implements IWrite<T>, IRead<T> {
    
    public readonly _collection: Collection;

    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async create(item: T): Promise<boolean> {
        const result: InsertOneWriteOpResult = await this._collection.insert(item);
        return !!result.result.ok;
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}