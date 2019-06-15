import React, { Component } from "react";

export class CameraList extends Component {
  renderCamerasList() {
    return this.props.cameras.map(camera =>
      this.renderCameraListElement(camera)
    );
  }

  renderCameraListElement(camera) {
    return (
      <li
        key={camera.id.toString()}
        onClick={() =>
          this.props.selectionHandler(this.props.cameras.indexOf(camera))
        }
      >
        <button className="list-item">
          {camera.model} {camera.producer} {camera.price}
        </button>
      </li>
    );
  }

  render() {
    return (
      <div className="CamerasList">
        <h3>Available cameras</h3>
        {this.renderCamerasList()}
      </div>
    );
  }
}
