import { useContext } from "react";
import { CourseContext } from "./courseContext";
import { StudentContext } from "./studentContext";

// This component is not given student or course props. It reads both contexts
// directly, which is the reason for useContext: shared data stays available
// at any depth under the providers.
const TestComponent = () => {
  const { studentInfo } = useContext(StudentContext);
  const { courseInfo } = useContext(CourseContext);

  return (
    <p className="summary">
      <strong>{studentInfo.studentName}</strong>
      is enrolled in
      <strong>{courseInfo.courseName}</strong>
      <span>{courseInfo.courseId}</span>
    </p>
  );
};

export default TestComponent;
