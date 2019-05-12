const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());
const cameras = [];

app.get("/api/", (req, res) => res.send("Hi there"));

app.get("/api/cameras/all", (req, res) => res.send(cameras));

app.post("/api/cameras", (req, res) => {
  const camera = req.body.camera;
  cameras.push(camera);
  res.send({ message: "camera was added" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));
