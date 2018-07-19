import React, { Component } from "react";

import "../css/counter.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.multipler = React.createRef();
  }

  multiple = id => {
    const times = this.multipler.current.value;
    const multiple = this.props.cMultiple;
    multiple(id, times);
  };

  asyncIncre = id => {
    setTimeout(() => {
      const increate = this.props.cIncrement;
      increate(id);
    }, 1000);
  };

  render() {
    const { id, value, cIncrement, cDecrement, cReset } = this.props;
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
            cIncrement(id);
          }}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => {
            cDecrement(id);
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
            cReset(id);
          }}
        >
          RESET
        </button>
      </div>
    );
  }
}
