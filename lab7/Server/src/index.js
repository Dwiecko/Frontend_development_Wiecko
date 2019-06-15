import CamerasCatalogue from "../src/Services/CamerasCatalogue";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const camerasCatalogue = new CamerasCatalogue();

app.use(bodyParser.json());

app.get("/api/", (req, res) => res.send("Hi there"));

app.get("/api/cameras/all", (req, res) =>
  res.send(camerasCatalogue.getAllCameras())
);
app.get("/api/cameras/get/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let camera = camerasCatalogue.getById(id);

  res.send(JSON.stringify(camera, null, 2));
});

app.post("/api/cameras", (req, res) => {
  let status = camerasCatalogue.add(req.body);
  res.send(status);
});

app.delete("/api/cameras/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let status = camerasCatalogue.delete(id);

  res.send(status);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
