import React, { useState } from "react";

// 1. Create the context. This is the shared channel that child components
// subscribe to with useContext. null is only the value before a provider exists.
export const StudentContext = React.createContext(null);

const initialState = {
  studentId: 101,
  studentName: "Satish",
  email: "satish@gmail.com",
  phone: 55555,
};

export const MyStudentProvider = (props) => {
  // 2. Keep the student data in the provider so every child reads the same state.
  // Updating it here re-renders the components that consume this context.
  const [studentInfo, setStudentInfo] = useState(initialState);

  // Toggle the displayed name. The updater receives the latest state,
  // so the change is not based on a stale copy.
  const updateStudentName = () => {
    setStudentInfo((current) => ({
      ...current,
      studentName: current.studentName === "Satish" ? "Satish Prasad" : "Satish",
    }));
  };

  return (
    // 3. Publish both the data and the action. Anything rendered inside this
    // provider, including nested components, can read this value.
    <StudentContext.Provider value={{ studentInfo, updateStudentName }}>
      {props.children}
    </StudentContext.Provider>
  );
};
