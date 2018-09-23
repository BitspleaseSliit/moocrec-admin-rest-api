import * as mongoose from 'mongoose';

console.log("db connection");

export const db = mongoose.connect(process.env.dbString);

// const CourseSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     provider: {
//         type: String
//     },
//     courseUrl: {
//         type: String
//     },
//     logo: {
//         type: String
//     },
//     videoStyle: {
//         talkingHead: {
//              type: Number   
//         },
//         slide: {
//             type: Number   
//         },
//         code: {
//             type: Number   
//         },
//         conversation: {
//             type: Number   
//         },
//         animation: {
//             type: Number
//         },
//         whiteboard: {
//             type: Number
//         }
//     },
//     abstractTopics: [
//         {
//             type: String
//         }
//     ],
//     courseAccent: {
//         type: Number
//     },
//     linguisticComplexity: {
//         type: Number
//     },
//     courseScore: {
//         type: Number
//     }
// })