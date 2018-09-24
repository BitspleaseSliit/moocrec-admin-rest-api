import * as mongoose from 'mongoose';

console.log("db connection");

export const DB = mongoose.connect(process.env.dbString);

