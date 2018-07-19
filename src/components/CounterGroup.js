import React, { Component } from "react";
import Counter from "./Counter";
import "../css/counter.css";

export default class CounterGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { values, gIncrement, gDecrement, gMultiple, gReset } = this.props;
    const { size } = this.props;
    let counters = []
      .concat(values)
      .map((value, index) => (
        <Counter
          id={index}
          value={value}
          cIncrement={gIncrement}
          cDecrement={gDecrement}
          cMultiple={gMultiple}
          cReset={gReset}
        />
      ));
    return <div class="group">{counters}</div>;
  }
}
