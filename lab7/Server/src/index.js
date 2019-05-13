const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;
const camerasCatalogue = new CamerasCatalogue();

app.use(bodyParser.json());

app.get("/api/", (req, res) => res.send("Hi there"));

app.get("/api/cameras/all", (req, res) =>
  res.send(camerasCatalogue.getAllCameras())
);

app.get("/api/cameras/get", (req, res) => {
  const cameraModel = req.body.cameraModel;

  res.send(camerasCatalogue.getAllCameras());
});

app.post("/api/cameras", (req, res) => {
  camerasCatalogue.addCamera(req.camera);
  res.send({ message: "camera was added" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
