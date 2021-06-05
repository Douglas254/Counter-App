import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 45,
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state; // object destructuring
    return count === 0 ? "Zero" : count; // ternary operator
  }
}

export default Counter;
