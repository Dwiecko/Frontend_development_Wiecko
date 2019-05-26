import React, { Component } from "react";
import Axios from "axios";

class Num extends Component {
  state = {
    number: "",
    numbers: []
  };

  componentDidMount() {
    this.fetchNumbers();
  }

  async fetchNumbers() {
    const values = await Axios.get(
      "http://localhost:4000/api/numbers/all"
    ).then(response => response.data);
    console.log(values);
    this.setState({ numbers: values });
  }

  handleSubmit = async event => {
    event.preventDEfault();
    await Axios.post("http://localhost:4000/api/numbers", {
      number: this.state.number
    });
  };

  renderNumbers() {
    return this.state.numbers.map(number => number).join(" , ");
  }

  render() {
    <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter number:</label>
          <input
            value={this.state.number}
            onChange={event => this.setState({ number: event.target.value })}
          />
        </form>
      </div>
      <div>{this.renderNumbers()}</div>;
    </div>;
  }
}
export default Num;
