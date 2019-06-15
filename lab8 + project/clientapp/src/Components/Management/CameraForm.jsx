import React, { Component } from "react";
import Camera from "../Models/Camera";

export class CameraForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraId: 0,
      cameraModel: "",
      cameraProducer: "",
      cameraProductionYear: 0,
      cameraPrice: 0,
      usb20: false
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const camera = new Camera(
      this.state.cameraId,
      this.state.cameraModel,
      this.state.cameraProducer,
      this.state.cameraPrice,
      this.state.cameraProductionYear,
      true
    );
    this.props.onCameraSubmit(camera);
  };

  render() {
    return (
      <div className="CameraForm">
        <form onSubmit={this.handleFormSubmit}>
          <label>ID:</label>
          <br />
          <input
            value={this.state.cameraId}
            onChange={event => this.setState({ cameraId: event.target.value })}
          />
          <br />
          <label>Model:</label>
          <br />
          <input
            value={this.state.cameraModel}
            onChange={event =>
              this.setState({ cameraModel: event.target.value })
            }
          />
          <br />
          <label>Producer:</label>
          <br />
          <input
            value={this.state.cameraProducer}
            onChange={event =>
              this.setState({ cameraProducer: event.target.value })
            }
          />
          <br />
          <label>Price:</label>
          <br />
          <input
            value={this.state.cameraPrice}
            onChange={event =>
              this.setState({ cameraPrice: event.target.value })
            }
          />
          <br />
          <label>Production Year:</label>
          <br />
          <input
            value={this.state.cameraProductionYear}
            onChange={event =>
              this.setState({ cameraProductionYear: event.target.value })
            }
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
