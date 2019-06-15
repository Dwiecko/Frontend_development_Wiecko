import React, { Component } from "react";

export class CameraDetails extends Component {
  renderCameraDetails() {
    if (this.props.camera) {
      return Object.keys(this.props.camera).map(camerak => (
        <p key={camerak}>
          {camerak}: {this.props.camera[camerak].toString()}
        </p>
      ));
    }
  }

  render() {
    return (
      <div className="CameraDetails">
        <h3>Camera: </h3>
        <div>{this.renderCameraDetails()}</div>
      </div>
    );
  }
}
