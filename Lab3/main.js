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
    return this.Producer;
}
Camera.prototype.getModel = function()
{
    return this.model;
}
Camera.prototype.getProductionYear = function()
{
    return this.productionYear;
}
Camera.prototype.getUsb20 = function()
{
    return this.usb20;
}

//private
function addSingleCamera(producer, model, productionYear, usb20, price)
{
    return {
        Producer: producer,
        Model: model,
        ProductionYear: productionYear,
        USB20: usb20,
        Price: price
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

// Object invoke
Camera.prototype = Object.create(Camera.prototype);
Camera.prototype.constructor = Camera;

var camerasClass = new Camera("Panasonic", "Lumix AB-ABCD2", 2017, true, 20000.00);
console.log(camerasClass.getProductionYear());

var secondCamera = new Camera("Lumix", "Lumix AB-ABCD2", 2017, true, 20000.00)
camerasArray.push(secondCamera);