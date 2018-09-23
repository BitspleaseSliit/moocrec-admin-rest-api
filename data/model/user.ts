import {Document, model, Model, Schema} from 'mongoose';


var userSchema: Schema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    learningStyles: {
      active: {
        type: Number
      },
      reflective: {
        type: Number
      },
      sensing: {
        type: Number
      },
      intuitive: {
        type: Number
      },
      visual: {
        type: Number
      },
      verbal: {
        type: Number
      },
      sequential: {
        type: Number
      },
      global: {
        type: Number
      }
    },
    knowledgeLevel: {
      type: Number
    },
    status: {
      type: Boolean,
      default: true
    }
});

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    learningStyles: object;
    knowledgeLevel: Number;
    linguisticComplexity: Number;
    status: boolean;
};

export const UserModel: Model<IUser> = model<IUser>('User', userSchema)