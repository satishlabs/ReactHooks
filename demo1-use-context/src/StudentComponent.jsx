import { useContext } from "react";
import { StudentContext } from "./studentContext";

const StudentComponent = () => {
  // 4. Read the nearest StudentContext.Provider value. No student props are required.
  const { studentInfo, updateStudentName } = useContext(StudentContext);
  const { studentId, studentName, email, phone } = studentInfo;

  return (
    <article className="card card-student">
      <header className="card-header">
        <div className="card-mark" aria-hidden="true">
          {studentName.charAt(0)}
        </div>
        <div>
          <p className="card-kicker">Student</p>
          <h2>{studentName}</h2>
        </div>
      </header>
      <dl className="card-details">
        <div>
          <dt>Id</dt>
          <dd>{studentId}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{email}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{phone}</dd>
        </div>
      </dl>
      <button className="card-action" type="button" onClick={updateStudentName}>
        Update Name
      </button>
    </article>
  );
};

export default StudentComponent;
