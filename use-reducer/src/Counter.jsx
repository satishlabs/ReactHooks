import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        case "RESET":
            return 0;        
    
        default:
            return state;
    }
}



function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <section className="counter" aria-label="Counter">
            <p className="kicker">Current count</p>
            <p className="count">{count}</p>
            <div className="counter-actions">
                <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
                    Decrement
                </button>
                <button type="button" className="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                    Increment
                </button>
                <button type="button" className="quiet" onClick={() => dispatch({ type: "RESET" })}>
                    Reset
                </button>
            </div>
        </section>
    );
}

export default Counter;