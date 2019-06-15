import CamerasCatalogue from "./Services/CamerasCatalogue";
import express from "express";
import bodyParser from "body-parser";
var cors = require("cors");
const app = express();
const port = 4000;
const camerasCatalogue = new CamerasCatalogue();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/", (req, res) => res.send("Hi there"));

app.get("/api/camera", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(camerasCatalogue.getAllCameras());
});

app.get("/api/camera/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let camera = camerasCatalogue.getById(id);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(camera, null, 2));
});

app.post("/api/camera", (req, res) => {
  let status = camerasCatalogue.add(req.body);
  res.send(status);
});

app.delete("/api/camera/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let status = camerasCatalogue.delete(id);

  res.send(status);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
