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

var camerasArray = [];



// Private methods
Camera.prototype = {
}

// Public methods
Camera.prototype.getProducer = function()
{
    return producer;
}
Camera.prototype.getModel = function()
{
    return model;
}
Camera.prototype.getProductionYear = function()
{
    return productionYear;
}
Camera.prototype.getUsb20 = function()
{
    return usb20;
}

//private
function addSingleCamera(_producer, _model, _productionYear, _usb20, _price)
{
    return {
        producer: _producer,
        model: _model,
        productionYear: _productionYear,
        usb20: _usb20,
        price: _price
    };
}

function Camera(_producer, _model, _productionYear, _usb20, _price)
{
    producer = _producer,
    model = _model,
    productionYear = _productionYear,
    usb20 = _usb20,
    price = _price

    camerasArray.push(addSingleCamera(_producer, _model, _productionYear, _usb20, _price));

    printCamera = function(){
        console.log("Successfully added a new camera");
        console.log("Camera producer: " + producer);
        console.log("Camera model: " + model);
        console.log("Camera productionYear: " + productionYear);
        console.log("Camera has USB 2.0: " + usb20);
        console.log("Camera price: " + price);
    }

    printCamera();
}

Camera.prototype = Object.create(Camera.prototype);
Camera.prototype.constructor = Camera;

var camerasClass = new Camera("Panasonic", "Lumix AB-ABCD2", 2017, true, 20000.00);
console.log("Public method, get production year: " + camerasClass.getProductionYear());

var secondCamera = new Camera("Lumix", "Lumix AB-ABCD2", 2017, true, 20000.00)
camerasArray.push(secondCamera);