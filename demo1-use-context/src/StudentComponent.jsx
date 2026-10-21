import { useContext } from "react";
import { StudentContext } from "./studentContext";

function StudentComponent() {
  const { studentInfo, updateStudentName } = useContext(StudentContext);

  return (
    <article className="card" aria-labelledby="student-heading">
      <h2 id="student-heading">Student information</h2>
      <p><span>Student ID</span><strong>{studentInfo.studentId}</strong></p>
      <p><span>Name</span><strong>{studentInfo.studentName}</strong></p>
      <p><span>Email</span><strong>{studentInfo.email}</strong></p>
      <p><span>Phone</span><strong>{studentInfo.phone}</strong></p>
      <button type="button" onClick={updateStudentName}>Change student name</button>
    </article>
  );
}

export default StudentComponent;