# useContext + useReducer

This lab shares student and course data without prop drilling, and it changes that data through named actions.

## Read the code in this order

1. `src/studentReducer.js` — the pure student reducer. `src/studentContext.jsx` only calls `useReducer` and shares the result.
2. `src/StudentComponent.jsx` — `useContext` reads the state and calls `dispatch`.
3. `src/courseTypes.jsx` — `UPDATE_CNAME`, `UPDATE_PRICE`, `UPDATE_DURATION`, and `UPDATE_DESCRIPTION`. `src/courseReducer.js` switches on those names. `src/courseContext.jsx` only calls `useReducer`.
4. `src/TestComponent.jsx` — one component reads both contexts.
5. `src/App.jsx` — both providers wrap the page.

## What happens on a click

1. The button calls `dispatch({ type, payload })`.
2. `useReducer` calls `reducer(currentState, action)`.
3. The reducer returns a new state object and does not edit the old one.
4. The provider shares that state. Every `useContext` reader renders again.

`UPDATE_NAME` sends the next student name in `payload`. Each course button sends one of the `courseTypes.jsx` constants, and `payload` is the new name, price, duration, or description.

## Run it

```bash
npm install
npm run dev
```
