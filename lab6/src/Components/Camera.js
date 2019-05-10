import React, { Component } from "react";
class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producer: props.producer,
      model: props.model,
      productionYear: props.productionYear,
      usb20: props.usb20,
      price: props.price
    };
  }

  render() {
    return (
      <div>
        <p>Producer: {this.state.producer}</p>
        <p>Model: {this.state.model}</p>
        <p>ProductionYear: {this.state.productionYear}</p>
        <p>USB20: {this.state.usb20}</p>
        <p>Price: {this.state.price}</p>
      </div>
    );
  }
}

export default Camera;
