
import React, { useReducer } from "react";

import { UPDATE_CNAME, UPDATE_PRICE, UPDATE_DURATION, UPDATE_TRAINER } from "./courseTypes";

//1. Create a context for the course data
const courseContext = React.createContext(null);

//2. Define Initial state for the course data
const initialCourseState = {
    courseId: "C-101",
    courseName: "React Hooks",
    price: 1000,
    duration: "50 Hrs",
    trainer: "SD",
};

//3. Define a reducer function to handle state updates
const myreducer = (currentState, action) => {
    console.log("C","[courseContext]", action.type, action.payload);
    switch (action.type) {
        case UPDATE_CNAME:
            return {
                 ...currentState,
                courseName: action.payload,
                };
        case UPDATE_PRICE:
            return {
                 ...currentState,
                price: action.payload,
                };
        case UPDATE_DURATION:
            return {
                 ...currentState,
                duration: action.payload,
                };
        case UPDATE_TRAINER:
            return {
                 ...currentState,
                trainer: action.payload,
                };
        default:
            return currentState;
    }
}

export const MyCourseProvider = (props) => {
    //4. Use the useReducer hook to manage the course state and provide it to child components
    const [courseData, courseDispatch] = useReducer(myreducer, initialCourseState);
    return (
        //5. Specify the Provider component and pass the state and dispatch function as value to the context
        <courseContext.Provider value={
            { courseData,
             courseDispatch }
             }>
            {props.children}
        </courseContext.Provider>
    );
}

//6. Export the context to be used in other components
export const MyCourseContext = courseContext;