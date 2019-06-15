import React, { Component } from "react";
import { CamerasCatalogue } from "../../Services/CamerasCatalogue.jsx";
import { CameraList } from "./CameraList.jsx";
import { CameraDetails } from "./CameraDetails.jsx";
import { CameraForm } from "./CameraForm.jsx";

export class Management extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;

    this.camerasCatalogue = new CamerasCatalogue();

    this.state = {
      cameras: [],
      currentCameraIndex: 0,
      info: ""
    };
  }

  componentDidMount() {
    this.fetchCameras();
  }

  async fetchCameras() {
    const values = await this.camerasCatalogue.getAll();
    console.log("Values: " + values.length);
    this.setState({ cameras: values });
  }

  renderCameras() {
    return this.state.cameras.map(x => x.producer + " " + x.model).join(", ");
  }

  handleSubmit = async formCamera => {
    const result = await this.camerasCatalogue.add(formCamera);
    this.setState({
      info: Object.keys(result).includes("message") ? result.message : ""
    });
    this.fetchCameras();
  };

  handleSelectionChange = newIndex => {
    this.setState({ currentCameraIndex: newIndex });
  };

  render() {
    return (
      <div className="management">
        <p>Count: {this.state.cameras.length}</p>
        <p>{this.state.info}</p>
        <CameraForm onCameraSubmit={this.handleSubmit} />
        <br />
        <CameraList
          cameras={this.state.cameras}
          selectionHandler={this.handleSelectionChange}
        />
        <br />
        <CameraDetails
          camera={this.state.cameras[this.state.currentCameraIndex]}
        />
        <br />
      </div>
    );
  }
}
