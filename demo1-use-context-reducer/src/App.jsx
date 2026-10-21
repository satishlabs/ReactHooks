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
            <p className="eyebrow">React lab</p>
            <h1>Context and reducer</h1>
            <p className="lede">
              One course record. Each button dispatches an action, and the
              page reads the result from context.
            </p>
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
