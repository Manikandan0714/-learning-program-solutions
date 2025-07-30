import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleSynthetic = this.handleSynthetic.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  sayHello = () => {
    console.log("Hello! Incremented the count.");
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSynthetic(e) {
    alert("I was clicked");
  }

  render() {
    return (
      <div className="card">
        <h2>Counter & Events</h2>
        <p><strong>Count:</strong> {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleSynthetic}>Click Me</button>
      </div>
    );
  }
}

export default Counter;
