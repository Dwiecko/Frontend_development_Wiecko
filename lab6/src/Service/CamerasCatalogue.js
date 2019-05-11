import React, { Component } from "react";
class CamerasCatalogue extends Component {
  constructor(props) {
    super(props);

    this.cameras = [];
  }

  addCamera(camera) {
    this.cameras.push(camera);
  }

  getAllCameras() {
    return this.cameras;
  }

  getCamera(cameraModel) {
    return this.cameras.find(camera => camera.model === cameraModel);
  }
}

export default CamerasCatalogue;
