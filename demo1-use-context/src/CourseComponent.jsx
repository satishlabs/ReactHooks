import { useContext } from "react";
import { CourseContext } from "./courseContext";

const CourseComponent = () => {
  // 4. Read the nearest CourseContext.Provider value. No course props are required.
  const { courseInfo, updateCourseCost } = useContext(CourseContext);
  const { courseId, courseName, cost, trainer } = courseInfo;

  return (
    <article className="card card-course">
      <header className="card-header">
        <div className="card-mark" aria-hidden="true">
          {courseName.charAt(0)}
        </div>
        <div>
          <p className="card-kicker">Course</p>
          <h2>{courseName}</h2>
        </div>
      </header>
      <dl className="card-details">
        <div>
          <dt>Id</dt>
          <dd>{courseId}</dd>
        </div>
        <div>
          <dt>Cost</dt>
          <dd>₹{cost.toLocaleString("en-IN")}</dd>
        </div>
        <div>
          <dt>Trainer</dt>
          <dd>{trainer}</dd>
        </div>
      </dl>
      <button className="card-action" type="button" onClick={updateCourseCost}>
        Update Cost
      </button>
    </article>
  );
};

export default CourseComponent;
