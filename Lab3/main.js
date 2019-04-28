var NikonCamera = {
  producer: "Nikon",
  model: "ZX300",
  productionYear: 2017,
  uSB20: true,
  price: 1000.0
};

var CanonCamera = {
  producer: "Canon",
  model: "EOS1300D",
  productionYear: 2019,
  uSB20: false,
  price: 10000.0
};

var PanasonicCamera = {
  producer: "Panasonic",
  model: "Lumix DC-FZ82",
  productionYear: 2019,
  uSB20: false,
  price: 4000.0
};

var camerasModule = (function() {
  var camerasArray = [PanasonicCamera];

  return {
    findCameraByModel: function(modelToFind) {
      var searchedCamera = camerasArray.find(function(camera){
        return camera.model === modelToFind;
      });

      if(searchedCamera != undefined) return searchedCamera;
      console.log("Unable to find given camera model: " + modelToFind);
    },

    createSingleCamera: function(
      _producer,
      _model,
      _productionYear,
      _usb20,
      _price
    ) {
      camerasArray.push({
        producer: _producer,
        model: _model,
        productionYear: _productionYear,
        usb20: _usb20,
        price: _price
      });
      console.log("Successfully added a new Camera model: " + _model);
    },
    printCameras: function() {
      camerasArray.forEach(function(camera) {
        console.log("Camera model: " + camera.model);
      });
    }
  };
})();

function Camera(producer, model, productionYear, usb20, price) {
  (this.producer = producer),
    (this.model = model),
    (this.productionYear = productionYear),
    (this.usb20 = usb20),
    (this.price = price);
}

// Public methods
Camera.prototype.getProducer = function() {
  return this.producer;
};
Camera.prototype.getModel = function() {
  return this.model;
};
Camera.prototype.getProductionYear = function() {
  return this.productionYear;
};
Camera.prototype.getUsb20 = function() {
  return this.usb20;
};

Camera.prototype.takePicture = function() {
  return "Taking an picture...";
};

Camera.prototype = Object.create(Camera.prototype);
Camera.prototype.constructor = Camera;

function SportCamera(
  producer,
  model,
  productionYear,
  usb20,
  price,
  waterproof
) {
  Camera.call(this, producer, model, productionYear, usb20, price);

  this.waterproof = waterproof;
}

SportCamera.prototype = Object.create(Camera.prototype);
SportCamera.prototype.constructor = SportCamera;

SportCamera.prototype.getWaterproofProperty = function() {
  return this.waterproof;
};

SportCamera.prototype.setWaterproofProperty = function(waterproof) {
  this.waterproof = waterproof;
};

var camerasClass = new Camera(
  "Panasonic",
  "Lumix AB-ABCD2",
  2017,
  true,
  20000.0
);

var sportCameraClass = new SportCamera(
  "Go Pro",
  "Hero 5",
  2019,
  true,
  1500.0,
  true
);

console.log(
  "Public method, get production year: " + camerasClass.getProductionYear()
);

camerasModule.createSingleCamera(
  "PanasonicAA",
  "LumixAA AB-ABCD2",
  2017,
  true,
  20000.0
);

camerasModule.printCameras();

var searchedCamera = camerasModule.findCameraByModel("Lumix DC-FZ82");
console.log("Searched camera model: " + searchedCamera.model);
console.log(
  "Sport camera, waterproof: " + sportCameraClass.getWaterproofProperty()
);
console.log(camerasClass.takePicture());
var waterProofState = false;
sportCameraClass.setWaterproofProperty(false);
console.log("Setting waterproof to: " + waterProofState);
console.log(
  "Sport camera, waterproof: " + sportCameraClass.getWaterproofProperty()
);

// Access to private function cause an exception
//findCameraByModel("Lumix DC-FZ82");
//console.log("Searched nullable camera model: " + camerasModule.findCameraByModel("Test"));