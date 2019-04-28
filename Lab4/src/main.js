class Camera {
    constructor(producer, model, productionYear, usb20, price) {
        this._producer = producer;
        this._model = model;
        this._productionYear = productionYear;
        this._usb20 = usb20;
        this._price = price;
        this._camerasArray = [];
    }

    findCameraByModel(modelToFind) {
        console.log(`Searching for: ${modelToFind}`);
        var searchedCamera = this._camerasArray.find(x => x.model === modelToFind);
        console.log(`Found: ${searchedCamera.model}`);

        return searchedCamera;
    };

    createSingleCamera(_producer, _model, _productionYear, _usb20, _price) {
        this._camerasArray.push({
            producer: _producer,
            model: _model,
            productionYear: _productionYear,
            usb20: _usb20,
            price: _price
        });
        console.log(`Successfully added a new Camera model: ${_model}`);
    };

    printCameras() {
        this._camerasArray.forEach(camera => console.log(camera));
    };

    takePicture(){
        return "Taking an picture...";
    }

    getProducer() {
        return this._producer;
    };
    getModel() {
        return this._model;
    };
    getProductionYear() {
        return this._productionYear;
    };
    getUsb20() {
        return this._usb20;
    };
}

class SportCamera extends Camera {
    constructor(producer, model, productionYear, usb20, price, waterproof) {
        super(producer, model, productionYear, usb20, price);
        this._waterproof = waterproof;
    }

    getWaterproofProperty() {
        return this._waterproof;
    };

    setWaterproofProperty(waterproof) {
        this._waterproof = waterproof;
    };

    takePictureUnderwater() {
        return "Taking picture underwater....";
    }
}

const camerasClass = new Camera(
    "Panasonic",
    "Lumix AB-ABCD2",
    2017,
    true,
    20000.0
);

const sportCameraClass = new SportCamera(
    "Go Pro",
    "Hero 5",
    2019,
    true,
    1500.0,
    true
);

console.log(`Public method, get production year: ${camerasClass.getProductionYear()}`);

console.log(`All cameras before adding an element`);
camerasClass.printCameras();
camerasClass.takePicture();
camerasClass.createSingleCamera(
    "PanasonicAA",
    "LumixAA AB-ABCD1",
    2017,
    true,
    20000.0
);
console.log(`All cameras after adding an element`);
camerasClass.printCameras();

camerasClass
var searchedCamera = camerasClass.findCameraByModel('LumixAA AB-ABCD1');
console.log(`Searched camera model: ${searchedCamera.model}`);

console.log(`Sport camera, waterproof: ${sportCameraClass.getWaterproofProperty()}`);
var waterProofState = false;
sportCameraClass.setWaterproofProperty(false);
console.log(`Setting waterproof to: ${waterProofState}`);
console.log(`Sport camera, waterproof: ${sportCameraClass.getWaterproofProperty()}`);

  // Access to private function cause an exception
  //findCameraByModel("Lumix DC-FZ82");