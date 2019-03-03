var NikonCamera = {
    Producer: "Nikon",
    Model: "ZX300",
    ProductionYear: 2017,
    USB20: true,
    Price: 1000.00
}

var CanonCamera = {
    Producer: "Canon",
    Model: "EOS1300D",
    ProductionYear: 2019,
    USB20: false,
    Price: 10000.00
}

var PanasonicCamera = {
    Producer: "Panasonic",
    Model: "Lumix DC-FZ82",
    ProductionYear: 2019,
    USB20: false,
    Price: 4000.00
}

var camerasArray = [NikonCamera, CanonCamera];

console.log("Cameras array length before adding a new element: " + camerasArray.length);
addCamera("Panasonic", "Lumix AB-ABCD2", 2017, true, 20000.00);
console.log("Cameras array length after adding a new element: " + camerasArray.length);

console.log("Production year before change: " + CanonCamera.ProductionYear);
editCamerasYear("Canon", 2020)
console.log("Production year after change: " + CanonCamera.ProductionYear);

function addCamera(producer, model, productionYear, usb20, price)
{
    var newCamera = {
        Producer: producer,
        Model: model,
        ProductionYear: productionYear,
        USB20: usb20,
        Price: price
    }

    camerasArray.push(newCamera)
}

function editCamerasYear(producer, newProductionYear)
{
    camerasArray.filter(camera => camera.Producer === producer).forEach(x => x.ProductionYear = newProductionYear);
}

function editCameraYear(model, newProductionYear)
{
    camerasArray.filter(camera => camera.Model === model).forEach(x => x.ProductionYear = newProductionYear);
}

function removeCamera(model){
    camerasArray.find(camera => camera.Model === model);
}

function findCamerasByProducer(producerToFind){
    return camerasArray.findBy(x => x.Producer === producerToFind);
}

function getCameraByModel(modelToFind){
    return camerasArray.find(x => x.Model === modelToFind);
}