import React, { Component } from "react";
import "./App.css";

import Display from "./components/Display/Display";
import Dashboard from "./components/Dashboard/Dashboard";

const initialCount = {
  balls: 0,
  strikes: 0
};

class App extends Component {
  state = {
    count: {
      balls: 0,
      strikes: 0
    },
    message: "Batter up!"
  };

  resetCount = message => {
    this.setState({ count: initialCount, message });
  };

  ball = () => {
    this.state.count.balls < 3
      ? this.setState(prevState => ({
          count: { ...prevState.count, balls: prevState.count.balls + 1 },
          message: `Juuuuust a bit outside, ball ${
            prevState.count.balls === 0
              ? "one"
              : prevState.count.balls === 1
              ? "two"
              : "three"
          }`
        }))
      : this.resetCount("Ball 4, take your base!");
  };

  strike = () => {
    this.state.count.strikes < 2
      ? this.setState(prevState => ({
          count: { ...prevState.count, strikes: prevState.count.strikes + 1 },
          message: `Striiiiiike ${
            prevState.count.strikes === 0 ? "one" : "two"
          }!`
        }))
      : this.resetCount("STEEE-RIIIIKE THREE, you're out!");
  };

  foul = () => {
    this.state.count.strikes < 2
      ? this.setState(prevState => ({
          count: { ...prevState.count, strikes: prevState.count.strikes + 1 },
          message: `And that ball goes foul, strike ${
            prevState.count.strikes === 0 ? "one" : "two"
          }!`
        }))
      : this.setState({
          message: `Foul ball, count still at ${this.state.count.balls} and ${
            this.state.count.strikes
          }`
        });
  };

  hit = () => {
    this.resetCount(
      "A blooper over shortstop, and it's gonna fall in for a base hit!"
    );
  };

  render() {
    return (
      <div className="App">
        <Display count={this.state.count} />
        <Dashboard
          ball={this.ball}
          strike={this.strike}
          foul={this.foul}
          hit={this.hit}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
