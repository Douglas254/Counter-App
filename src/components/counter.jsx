import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  renderTags() {
    if (this.state.tags.length === 0)
      return (
        <p>
          <h1>There are no tags</h1>
        </p>
      );

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "please create a new tag"}
        {this.renderTags()} // conditional rendering
      </React.Fragment>
    );
  }
}

export default Counter;
