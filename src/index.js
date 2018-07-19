import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import counter from "./reducers";
import { increate, decreate, multiple, reset } from "./actions/index";

const store = createStore(counter);
const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <App
      values={store.getState()}
      increment={index => store.dispatch(increate(index))}
      decrement={index => store.dispatch(decreate(index))}
      multiple={(index, multipler) =>
        store.dispatch(multiple(index, multipler))
      }
      reset={index => store.dispatch(reset(index))}
    />,
    rootEl
  );
};

render();
store.subscribe(render);
