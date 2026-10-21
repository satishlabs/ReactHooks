
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
    
    const formattedPrice = `₹${Number(price).toLocaleString("en-IN")}`;

    return (
        <article className="record">
            <header className="record-top">
                <div>
                    <p className="kicker">Course record</p>
                    <h2>{courseName}</h2>
                </div>
                <span className="record-id">{courseId}</span>
            </header>
            <dl className="metrics">
                <div>
                    <dt>Price</dt>
                    <dd>{formattedPrice}</dd>
                </div>
                <div>
                    <dt>Duration</dt>
                    <dd>{duration}</dd>
                </div>
                <div>
                    <dt>Trainer</dt>
                    <dd>{trainer}</dd>
                </div>
            </dl>
            <ul className="actions">
                <li>
                    <div>
                        <span>Course name</span>
                        <strong>{courseName}</strong>
                    </div>
                    <button type="button" onClick={updateCourseName.bind(this, "Mastering React")}>
                        Set Mastering React
                    </button>
                </li>
                <li>
                    <div>
                        <span>Price</span>
                        <strong>{formattedPrice}</strong>
                    </div>
                    <button type="button" onClick={updatePrice.bind(this, 100)}>
                        Set ₹100
                    </button>
                </li>
                <li>
                    <div>
                        <span>Duration</span>
                        <strong>{duration}</strong>
                    </div>
                    <button type="button" onClick={updateDuration.bind(this, "8 weeks")}>
                        Set 8 weeks
                    </button>
                </li>
                <li>
                    <div>
                        <span>Trainer</span>
                        <strong>{trainer}</strong>
                    </div>
                    <button type="button" onClick={updateTrainer.bind(this, "Srinivas Dande")}>
                        Set Srinivas Dande
                    </button>
                </li>
            </ul>
        </article>
    );
}
export default CourseComponent;