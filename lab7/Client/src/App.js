import React, { Component } from "react";
import "./App.css";
import Camera from "./Components/Camera";
import CamerasCatalogue from "./Service/CamerasCatalogue";

class App extends Component {
  constructor(props) {
    super(props);

    this.camerasDb = new CamerasCatalogue();

    this.camerasDb.addCamera(
      new Camera("Nikon", "RX 3000", 2000, true, 2000.99)
    );
    this.camerasDb.addCamera(
      new Camera("Sony", "Alfa 360", 2000, true, 2000.99)
    );
    this.camerasDb.addCamera(
      new Camera("Nikon", "RX 5000", 2012, false, 5000.99)
    );
    this.camerasDb.addCamera(
      new Camera("Nikon", "RX 4000", 2018, true, 1000.99)
    );
    this.camerasDb.addCamera(
      new Camera("Sony", "Alfa 180", 2000, false, 7000.99)
    );
    this.state = {
      allCameras: this.camerasDb.getAllCameras(),
      randomCameraIndex: 0
    };
  }

  getRandomCameraIndex() {
    const min = 0;
    const max = this.state.allCameras.length;
    const randomNumber = Math.floor(min + Math.random() * (max - min));

    this.setState({
      randomCameraIndex: randomNumber
    });
  }

  componentDidMount() {
    this.timerState = setInterval(() => this.getRandomCameraIndex(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerState);
  }

  render() {
    return (
      <div>
        <div className="allCameras">
          <h2>All cameras:</h2>
          <table>
            <tr>
              <th>Model</th>
              <th>Producer</th>
              <th>ProductionYear</th>
              <th>USB20</th>
              <th>Price</th>
            </tr>

            {this.state.allCameras.map(camera => (
              <tr key={camera.toString()}>
                <td>{camera.model}</td>
                <td>{camera.producer}</td>
                <td>{camera.productionYear}</td>
                <td>{camera.USB20}</td>
                <td>{camera.price}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="randomCamera">
          <h2>
            Random camera array index from 0 to{" "}
            {this.state.allCameras.length - 1}: {this.state.randomCameraIndex}
          </h2>
          <table key={this.state.randomCameraIndex}>
            <tr>
              <th>Model</th>
              <th>Producer</th>
            </tr>
            <tr>
              <td>
                {this.state.allCameras[this.state.randomCameraIndex].model}
              </td>
              <td>
                {this.state.allCameras[this.state.randomCameraIndex].producer}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
