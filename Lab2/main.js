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

console.log("All Canon cameras production year before change: " + CanonCamera.ProductionYear);
editCamerasYear("Canon", 2020);
console.log("All Canon cameras year after change: " + CanonCamera.ProductionYear);

console.log("Nikon camera year before: " + NikonCamera.ProductionYear);
editCameraYear("ZX300", 2020);
console.log("Nikon camera year after: " + NikonCamera.ProductionYear);

//console.log("Cameras array length before removing a element: " + camerasArray.length);
//removeCamera("ZX300");
//console.log("Cameras array length after removing a element: " + camerasArray.length);

var newElement = getCameraByModel("ZX300");
console.log("Searched camera producer: " + newElement.Producer)

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
    var camera = camerasArray.find(camera => camera.Model === model);
    camera.ProductionYear = newProductionYear;
}

function removeCamera(model){

}

function findCamerasByProducer(producerToFind){
    return camerasArray.find(x => x.Producer === producerToFind);
}

function getCameraByModel(modelToFind){
    return camerasArray.find(x => x.Model === modelToFind);
}