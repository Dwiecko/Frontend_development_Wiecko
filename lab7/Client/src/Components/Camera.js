import { Component } from "react";

class Camera extends Component {
  constructor(producer, model, productionYear, usb20, price) {
    super(producer, model, productionYear, usb20, price);
    this.producer = producer;
    this.model = model;
    this.productionYear = productionYear;
    this.usb20 = usb20;
    this.price = price;
  }

  takePicture() {
    return "Taking an picture...";
  }
}

export default Camera;
