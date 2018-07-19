import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterGroup from "./components/CounterGroup";
import Counter from "./components/Counter";

import counter from "./reducers";

class App extends Component {
  render() {
    const { values, increment, decrement, multiple, reset } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <CounterGroup
            size={2}
            values={values}
            gIncrement={increment}
            gDecrement={decrement}
            gMultiple={multiple}
            gReset={reset}
          />
        </p>
      </div>
    );
  }
  // store.subscribe(this.render)
}

export default App;
