import React, { Component } from "react";

import "../css/counter.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.multipler = React.createRef();
  }

  multiple = id => {
    const times = this.multipler.current.value;
    const multiple = this.props.onMultiple;
    multiple(id, times);
  };

  asyncIncre = id => {
    setTimeout(() => {
      const increate = this.props.onIncrement;
      increate(id);
    }, 1000);
  };

  render() {
    const { id, value, onIncrement, onDecrement, onReset } = this.props;
    return (
      <div class="counter">
        <button
          className="btn"
          onClick={() => {
            this.asyncIncre(id);
          }}
        >
          Increment Async
        </button>
        <button
          className="btn"
          onClick={() => {
            onIncrement(id);
          }}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => {
            onDecrement(id);
          }}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => {
            this.multiple(id);
          }}
        >
          x
        </button>
        <input
          className="multipler"
          type="text"
          defaultValue={0}
          ref={this.multipler}
        />
        <p>
          count:
          <span class="count">{value}</span>
        </p>
        <button
          className="btn reset"
          onClick={() => {
            onReset(id);
          }}
        >
          RESET
        </button>
      </div>
    );
  }
}
