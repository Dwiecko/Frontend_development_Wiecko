import React, { Component } from "react";

class PLN extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.onPLNChange(e.target.value);
  };

  render() {
    const cash = this.props.plns;
    return (
      <div>
        <label>PLNS</label>
        <input value={cash} onChange={this.handleChange} />
      </div>
    );
  }
}
export default PLN;
