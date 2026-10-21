import { useContext } from "react";
import { CourseContext } from "./courseContext";

function CourseComponent() {
    const { courseInfo, updateCourseCost } = useContext(CourseContext);

    return (
        <article className="card" aria-labelledby="course-heading">
            <h2 id="course-heading">Course information</h2>
            <p><span>Course ID</span><strong>{courseInfo.courseId}</strong></p>
            <p><span>Course</span><strong>{courseInfo.courseName}</strong></p>
            <p><span>Cost</span><strong>{courseInfo.cost.toLocaleString()}</strong></p>
            <p><span>Trainer</span><strong>{courseInfo.trainer}</strong></p>
            <button type="button" onClick={updateCourseCost}>Change course cost</button>
        </article>
    );
}

export default CourseComponent;