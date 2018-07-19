import React, { Component } from "react";
import Counter from "../containers/CounterContainer";
import "../css/counter.css";

export default class CounterGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size } = this.props;
    let counters = [];
    for (let i = 0; i < size; i++) {
      counters.push(<Counter id={i} />);
    }
    return <div class="group">{counters}</div>;
  }
}
