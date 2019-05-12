import React, { Component } from "react";

class Camera extends Component {
  constructor(producer, model, productionYear, usb20, price) {
    super(producer, model, productionYear, usb20, price);
    this.producer = producer;
    this.model = model;
    this.productionYear = productionYear;
    this.usb20 = usb20;
    this.price = price;
  }

  render() {
    return (
      <div>
        <p>Producer: {this.producer}</p>
        <p>Model: {this.model}</p>
        <p>ProductionYear: {this.productionYear}</p>
        <p>USB20: {this.usb20}</p>
        <p>Price: {this.price}</p>
      </div>
    );
  }
}

export default Camera;
