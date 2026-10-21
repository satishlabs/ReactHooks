
import React, { useContext } from 'react';
import { MyCourseContext } from './courseContext';

const CourseComponent = (props) => {

    const mycourseConsumer = useContext(MyCourseContext);

    const {courseData, courseDispatch} = mycourseConsumer;
    const {courseId, courseName, price, duration, trainer} = courseData;

    const updateCourseName = (updatedCname) => {
        console.log("A","[CourseComponent] - updateCourseName", updatedCname);
        courseDispatch({
            type: "UPDATE_CNAME",
            payload: updatedCname
        });
    }

    const updatePrice = (updatedPrice) => {
        console.log("A","[CourseComponent] - updatePrice", updatedPrice);
        courseDispatch({
            type: "UPDATE_PRICE",
            payload: updatedPrice
        });
    }

    const updateDuration = (updatedDuration) => {
        console.log("A","[CourseComponent] - updateDuration", updatedDuration);
        courseDispatch({
            type: "UPDATE_DURATION",
            payload: updatedDuration
        });
    }

    const updateTrainer = (updatedTrainer) => {
        console.log("A","[CourseComponent] - updateTrainer", updatedTrainer);
        courseDispatch({
            type: "UPDATE_TRAINER",
            payload: updatedTrainer
        });
    }
    
    return (
        <div className="container">
            <br/>
            <b><u>Course Details</u></b>
            <br/>
            <table className='table'>
                <tbody>
                    <tr>
                        <td> CourseId: {courseId}</td>
                    </tr>
                    <tr>
    
                        <td>Course Name :{courseName}</td>
                        <td>
                            <button onClick={updateCourseName.bind(this, "Mastering React")} className="btn btn-success">Update Course Name</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Price : {price}</td>
                        <td>
                            <button onClick={updatePrice.bind(this, 100)} className="btn btn-success">Update Price</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Duration : {duration}</td>
                        <td>
                            <button onClick={updateDuration.bind(this, "8 weeks")} className="btn btn-success">Update Duration</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Trainer : {trainer}</td>
                        <td>
                            <button onClick={updateTrainer.bind(this, "Srinivas Dande")} className="btn btn-success">Update Trainer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default CourseComponent;