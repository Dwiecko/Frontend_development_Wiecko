import React, { Component } from "react";
import "./App.css";
import Camera from "./Components/Camera";

class App extends Component {
  render() {
    return (
      <div>
        <div className="testDiv">
          <Camera
            producer="Nikon"
            model="RX 3000"
            productionYear="2000"
            usb20="true"
            price="3000.00"
          />
        </div>
        <div>
          <Camera
            producer="Sony"
            model="Alfa 360"
            productionYear="2015"
            usb20="false"
            price="10000.00"
          />
        </div>
        <div>
          <Camera
            producer="Sony"
            model="RX 380"
            productionYear="2018"
            usb20="false"
            price="20000.00"
          />
        </div>
      </div>
    );
  }
}

export default App;
