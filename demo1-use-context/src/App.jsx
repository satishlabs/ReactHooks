import "./App.css";
import CourseComponent from "./CourseComponent";
import { MyCourseProvider } from "./courseContext";
import StudentComponent from "./StudentComponent";
import { MyStudentProvider } from "./studentContext";
import TestComponent from "./TestComponent";

function App() {
  return (
    // Providers must wrap the components that call useContext.
    // Nesting them lets one child read both student and course data
    // without those values being passed down as props.
    <MyStudentProvider>
      <MyCourseProvider>
        <section id="center">
          <header className="page-header">
            <p className="eyebrow">React Hooks</p>
            <h1>useContext Demo</h1>
            <TestComponent />
          </header>
          <div className="cards">
            <StudentComponent />
            <CourseComponent />
          </div>
        </section>
      </MyCourseProvider>
    </MyStudentProvider>
  );
}

export default App;
