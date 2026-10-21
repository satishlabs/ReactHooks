import "./App.css";
import CourseComponent from "./CourseComponent";
import LearnPanel from "./LearnPanel";
import { MyCourseProvider } from "./courseContext";

function App() {
  return (
    // Each provider owns one useReducer. Components inside can dispatch to
    // either reducer through useContext, with no props passed down.

      <MyCourseProvider>
        <section id="center">
          <header className="page-header">
            <p className="eyebrow">React Hooks</p>
            <h1>Context + Reducer</h1>
          </header>
          <LearnPanel />
          <div className="cards">
            <CourseComponent />
          </div>
        </section>
      </MyCourseProvider>
  );
}

export default App;
