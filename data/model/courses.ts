import {Document, model, Model, Schema} from 'mongoose';


var CourseSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    provider: {
        type: String
    },
    courseUrl: {
        type: String
    },
    logo: {
        type: String
    },
    videoStyle: {
        talkingHead: {
             type: Number   
        },
        slide: {
            type: Number   
        },
        code: {
            type: Number   
        },
        conversation: {
            type: Number   
        },
        animation: {
            type: Number
        },
        whiteboard: {
            type: Number
        }
    },
    abstractTopics: [
        {
            type: String
        }
    ],
    courseAccent: {
        type: Number
    },
    linguisticComplexity: {
        type: Number
    },
    courseScore: {
        type: Number
    }
});

interface ICourse extends Document {
    name: string;
    provider: string;
    courseUrl: string;
    logo: string;
    videoStyle: object;
    abstractTopics: any[];
    courseAccent: Number;
    linguisticComplexity: Number;
    courseScore: Number;
};

export const CoursesModel: Model<ICourse> = model<ICourse>('Course', CourseSchema)