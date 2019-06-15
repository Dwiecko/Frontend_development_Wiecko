import Camera from "../Components/Camera";

export default class CamerasCatalogue {
  constructor() {
    this.cameras = [
      new Camera(1, "Nikon", "RX 3000", 2000, true, 1000.0),
      new Camera(2, "Go Pro", "Hero 5", 2017, true, 1500.0),
      new Camera(3, "Sony", "Alfa 360", 2013, false, 6000.0)
    ];
  }

  add(newCamera) {
    if (this.cameras.find(camera => camera.id === newCamera.id)) {
      return `Camera with ID: ${newCamera.id} already exists.`;
    }
    this.cameras.push(newCamera);
    return `Camera: ${newCamera.model} added.`;
  }

  getById(id) {
    return this.cameras.find(camera => camera.id === id);
  }

  getAllCameras() {
    return this.cameras;
  }

  update(id, newCamera) {
    let cameraIndex = this.cameras.findIndex(camera => camera.id === id);
    if (cameraIndex === -1) {
      return `Camera with ID: ${id} does not exists.`;
    }
    this.cameras[cameraIndex] = newCamera;
    return `Camera with ID: ${id} updated.`;
  }

  delete(id) {
    var cameraIndex = this.cameras.findIndex(camera => camera.id === id);
    if (cameraIndex === -1) {
      return `Camera with ID: ${id} does not exists.`;
    }
    this.cameras.splice(cameraIndex, 1);
    return `Camera with ID: ${id} deleted.`;
  }
}
