import * as mongoose from 'mongoose';

console.log("db connection");

export const db = mongoose.connect(process.env.dbString);

