var NikonCamera = {
    Producer: "Nikon",
    Model: "ZX300",
    ProductionYear: 2017,
    USB20: true,
    Price: 1000.00
}

var NikonCameraProfessional = {
    Producer: "Nikon",
    Model: "ZX500",
    ProductionYear: 2019,
    USB20: true,
    Price: 10000.00
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

var camerasArray = [NikonCamera, NikonCameraProfessional, CanonCamera];

console.log("Cameras array length before adding a new element: " + camerasArray.length);
addCamera("Panasonic", "Lumix AB-ABCD2", 2017, true, 20000.00);
console.log("Cameras array length after adding a new element: " + camerasArray.length);

console.log("All Canon cameras production year before change: " + CanonCamera.ProductionYear);
editCamerasYear("Canon", 2025);
console.log("All Canon cameras year after change: " + CanonCamera.ProductionYear);

console.log("Nikon camera year before: " + NikonCamera.ProductionYear);
editCameraYear("ZX300", 2020);
console.log("Nikon camera year after: " + NikonCamera.ProductionYear);

console.log("Cameras array length before removing a element: " + camerasArray.length);
removeCamera("ZX300");
console.log("Cameras array length after removing a element: " + camerasArray.length);

var newElement = findCameraByModel("ZX500");
console.log("Searched camera model: " + newElement.Model)

console.log("Creating camera that already exists in database");
addCamera("Panasonic", "Lumix AB-ABCD2", 2017, true, 20000.00);
console.log("Cameras array length: " + camerasArray.length);

function addCamera(producer, model, productionYear, usb20, price)
{
    if(camerasArray.indexOf(findCameraByModel(model)) == -1)
    {
        console.log("Successfully added a new Camera model: " + model);
        camerasArray.push({
            Producer: producer,
            Model: model,
            ProductionYear: productionYear,
            USB20: usb20,
            Price: price
        });
    }
    else
    {
        console.log("Database already contains camera model: " + model);
    }
}

function editCamerasYear(producer, newProductionYear)
{
    var cameras = findCamerasByProducer(producer);

    cameras.forEach(function(camera){
        camera.ProductionYear = newProductionYear}
    );
}

function editCameraYear(model, newProductionYear)
{
    var camera = findCameraByModel(model);

    camera.ProductionYear = newProductionYear;
}

function removeCamera(model)
{
    var index = camerasArray.indexOf(findCameraByModel(model));

    if (index !== -1 )
    {
        console.log("Removing camera with index: " + index);

        camerasArray.splice(index, 1);
    }
    else
    {
        console.log("Unable to find a camera with given model");
    }
}

function findCamerasByProducer(producerToFind)
{
    var cameras = camerasArray.filter(function(camera){
        return camera.Producer === producerToFind;
    });

    return cameras;
}

function findCameraByModel(modelToFind)
{
    var searchedCamera = camerasArray.find(function(camera){
        return camera.Model === modelToFind;
    });

    if(searchedCamera === undefined) console.log("Unable to find a model: " + modelToFind);

    return searchedCamera;
}