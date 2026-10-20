import React, { useState } from "react";

// 1. Create the context. Components can read this shared course data with
// useContext instead of receiving it through props at every level.
export const CourseContext = React.createContext(null);

const initialState = {
  courseId: "C-11",
  courseName: "Spring MicroServices",
  cost: 18000,
  trainer: "Srinivas Dande",
};

export const MyCourseProvider = (props) => {
  // 2. Store the course data in the provider. useState redraws the consumers
  // when the cost changes.
  const [courseInfo, setCourseInfo] = useState(initialState);

  // Switch the course cost between the two demo values. Using the previous
  // state keeps the update based on the latest cost.
  const updateCourseCost = () => {
    setCourseInfo((current) => ({
      ...current,
      cost: current.cost === 18000 ? 20000 : 18000,
    }));
  };

  return (
    // 3. The Provider makes the course details and update function available to
    // every component rendered inside it, such as CourseComponent.
    <CourseContext.Provider value={{ courseInfo, updateCourseCost }}>
      {props.children}
    </CourseContext.Provider>
  );
};
