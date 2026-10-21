import { useContext } from "react";
import { CourseContext } from "./courseContext";
import { StudentContext } from "./studentContext";

function TestComponent() {
    const { studentInfo } = useContext(StudentContext);
    const { courseInfo } = useContext(CourseContext);

    return (
        <p className="summary">
            {studentInfo.studentName} is enrolled in {courseInfo.courseName}.
        </p>
    );
}

export default TestComponent;