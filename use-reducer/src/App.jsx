import "./App.css";
import Counter from "./Counter";

const actions = [
  { name: "INCREMENT", text: "Adds 1 to the current count." },
  { name: "DECREMENT", text: "Subtracts 1 from the current count." },
  { name: "RESET", text: "Returns the count to 0." },
];

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">React lab</p>
        <h1>useReducer</h1>
        <p className="lede">
          The buttons do not change the count themselves. Each one dispatches
          an action, and the reducer returns the next number.
        </p>
      </header>

      <section className="panel" aria-label="Reducer actions">
        <p className="kicker">Actions</p>
        <ul>
          {actions.map((action) => (
            <li key={action.name}>
              <code>{action.name}</code>
              <span>{action.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <Counter />
    </main>
  );
}

export default App;
