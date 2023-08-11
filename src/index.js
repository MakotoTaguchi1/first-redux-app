import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux"

// actions -> increment, decremant
const increment = () => {
  return {
    type: "INCREMENT",
  };
}

const decremant = () => {
  return {
    type: "DECREMENT",
  };
}

// reducer: actionと前の状態を組み合わせて新しい状態に更新する
const counterReducer = (state = 0, action)  => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

// store
let store = createStore(counterReducer)

// consoleに新しい状態を出力
store.subscribe(() => console.log(store.getState))

// dispatch
store.dispatch(increment())
store.dispatch(increment())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
