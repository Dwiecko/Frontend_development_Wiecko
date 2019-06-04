import React, { Component } from "react";
import Dollar from "./Dollar";
import PLN from "./PLN";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollar: 1,
      pln: 2
    };
  }

  handleDollarChange = value => {
    this.setState({ dollar: value, pln: value });
  };

  handlePLNChange = value => {
    this.setState({ dollar: value, pln: value });
  };

  render() {
    return (
      <div>
        <Dollar
          dollars={this.state.dollar}
          onDollarChange={this.handleDollarChange}
        />
        <PLN plns={this.state.pln} onPLNChange={this.handlePLNChange} />
      </div>
    );
  }
}
export default Parent;
