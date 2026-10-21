const steps = [
  {
    title: "dispatch",
    text: "A button calls dispatch with an action, such as { type: \"UPDATE_NAME\", payload: \"Satish Prasad\" }.",
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
    <section className="lesson" aria-label="How context and reducer work together">
      <p className="card-kicker">How to follow a click</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step.title}>
            <strong>
              {index + 1}. {step.title}
            </strong>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default LearnPanel;
