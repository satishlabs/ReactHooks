const steps = [
  {
    title: "dispatch",
    text: "A button calls dispatch with an action, such as { type: \"UPDATE_CNAME\", payload: \"Mastering React\" }.",
  },
  {
    title: "reducer",
    text: "useReducer passes the current state and that action into the reducer function.",
  },
  {
    title: "next state",
    text: "The reducer returns a new object. The old state is left unchanged.",
  },
  {
    title: "context",
    text: "The provider shares the new state. Every useContext reader renders again.",
  },
];

const LearnPanel = () => {
  return (
        <section className="flow" aria-label="How context and reducer work together">
      <p className="kicker">How a click moves</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="step-no">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default LearnPanel;
