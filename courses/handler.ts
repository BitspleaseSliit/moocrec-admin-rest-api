import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { CourseService  } from './courses.service';
import { ICourse } from '../data/model/courses'

const cs = new CourseService();

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  cb(null, response);
}


export const getCourses: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const type: string = event.pathParameters.type;
  var courses: ICourse[] = [];
  
  if(type == 'ALL'){
    courses = await cs.getAllCourses()
  }

  const response = {
    statusCode: 200,
    body: courses
  };

  cb(null, response);
}
