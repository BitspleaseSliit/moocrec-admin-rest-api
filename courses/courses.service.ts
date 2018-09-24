import { DB } from '../data/db/db.service'
import { CourseModel, ICourse } from '../data/model/courses'

export class CourseService {

    private db;
    private course;

    constructor() {
        this.db = DB;
        this.course = new CourseModel();
    }

    public getAllCourses(): Promise<ICourse[]>{
        return new Promise(
            (resolve, reject) => CourseModel.find({}, (err: any, courses: ICourse[]) => {
                if(err){
                    console.log('error in getAllCourses() : ', err);
                    const cour: ICourse[] = [];
                    reject(cour);
                }else{
                    resolve(courses);
                }
            })
        );
    };

}

