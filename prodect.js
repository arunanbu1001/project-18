const products = [
  {
    brand: "Dell",
    cpu: {
      brand: "INTEL",
      name: "i5",
      gen: 10,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: "GB",
    },
    ssd: {
      size: 250,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3060ti",
      size: 8,
      unit: "GB",
    },
    price: 150000,
    monitor: {
      brand: "LG",
      size: 24,
      unit: "inch",
    },
    mouse: "RazerDeathAdder V2",
    keyboard: "Sk68",
  },
  {
    brand: "Acer",
    cpu: {
      brand: "INTER",
      name: "i7",
      gen: 12,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: "GB",
    },
    ssd: {
      size: 250,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3080ti",
      size: 12,
      unit: "GB",
    },
    price: 250000,
    monitor: {
      brand: "ACER",
      size: 32,
      unit: "inch",
    },
    mouse: "Logitech G402",
    keyboard: "TVS Gold",
  },
  {
    brand: "lenova",
    cpu: {
      brand: "AMD",
      name: "Ryzen 5",
      gen: 2500,
    },
    os: "Windows11",
    ram: {
      size: 16,
      unit: "GB",
    },
    ssd: {
      size: 500,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3090ti",
      size: 24,
      unit: "GB",
    },
    price: 350000,
    monitor: {
      brand: "SAMSUNG",
      size: 21,
      unit: "inch",
    },
    mouse: "Razer Viper",
    keyboard: "Logitech prodigy",
  },
];
function creatwraper(primaryclass, primarytext, secondaryelements) {
  var primaryelement = document.createElement("span");
  primaryelement.innerText = primarytext;
  primaryelement.setAttribute("class", primaryclass)
  secondaryelements.forEach(function (secondaryelementdata) {
    var secondaryelement = document.createElement("span");
    secondaryelement.innerText = secondaryelementdata.text;
    if (secondaryelementdata.classname != "") {
      secondaryelement.setAttribute("class", secondaryelementdata.classname)
    }
    primaryelement.append(secondaryelement);
  });
  var wrapper = document.createElement("div");
  wrapper.append(primaryelement)
  return wrapper;

}


function accessSpecs(data) {
  var laptop = data;


  secondarybrandelementarray = [
    {
      'classname': "brand",
      "text": laptop.brand
    }
  ]

  secondarycpuelementarray = [
    {
      classname: "cpu",
      text: laptop.cpu.brand
    }
  ]
  secondaryoselementarray = [
    {
      classname: "os",
      text: laptop.os
    }
  ]
  secondaryramelementarray = [
    {
      'classname': "ram",
      "text": laptop.ram.size
    },
    {
      'classname': "",
      "text": laptop.ram.unit
    }

  ]
  secondaryssdelementarray = [
    {
      'classname': "ssd",
      "text": laptop.ssd.size
    },
    {
      'classname': "",
      "text": laptop.ssd.unit
    }

  ]
  secondarygpuelementarray = [
    {
      'classname': "brand",
      "text": laptop.gpu.brand
    },
    {
      'classname': "model",
      "text": laptop.gpu.model
    },
    {
      'classname': "gpu",
      "text": laptop.gpu.size
    },
    {
      'classname': "",
      "text": laptop.gpu.unit
    }

  ]
  secondarypriceelementarray = [
    {
      classname: "price",
      text: laptop.price
    }
  ]
  secondarymonitorelementarray = [
    {
      'classname': "brand",
      "text": laptop.monitor.brand
    },
    
    {
      'classname': "monitor",
      "text": laptop.monitor.size
    },
    {
      'classname': "",
      "text": laptop.monitor.unit
    }

  ]
  secondarymouseelementarray = [
    {
      classname: "mouse",
      text: laptop.mouse
    }
  ]
  secondarykeyboardelementarray = [
    {
      classname: "keyboard",
      text: laptop.keyboard
    }
  ]
  var brandwrapper = creatwraper("brand-id", "brand : ", secondarybrandelementarray);
  // console.log(brandwrapper)
  var cpuwrapper = creatwraper("cpu-id", "cpu : ", secondarycpuelementarray);
  // console.log(cpuwrapper)
  var oswrapper = creatwraper("os-id", "os : ", secondaryoselementarray);
  // console.log(oswrapper)
  var ramwrapper = creatwraper("ram-id", "ram : ", secondaryramelementarray);
  // console.log(ramwrapper)
  var ssdwrapper = creatwraper("ssd-id", "ssd : ", secondaryssdelementarray);
  // console.log(ssdwrapper)
  var gpuwrapper = creatwraper("gpu-id", "gpu : ", secondarygpuelementarray);
  // console.log(gpuwrapper)
  var pricewrapper = creatwraper("price-id", "price : ", secondarypriceelementarray);
  // console.log(pricewrapper)
  var monitorwrapper = creatwraper("monitor-id", "monitor : ", secondarymonitorelementarray);
  // console.log(monitorwrapper)
  var mousewrapper = creatwraper("mouse-id", "mouse : ", secondarymouseelementarray);
  // console.log(mousewrapper)
  var keyboardwrapper = creatwraper("keyboard-id", "keyboard : ", secondarykeyboardelementarray);
  // console.log(keyboardwrapper)
  var classcon = document.createElement("div")
  classcon.setAttribute("class", "class-cont")
  classcon.append(brandwrapper)
  classcon.append(cpuwrapper)
  classcon.append(oswrapper)
  classcon.append(ramwrapper)
  classcon.append(ssdwrapper)
  classcon.append(gpuwrapper)
  classcon.append(pricewrapper)
  classcon.append(monitorwrapper)
  classcon.append(mousewrapper)
  classcon.append(keyboardwrapper)
  var bodyelem = document.querySelector("body")
  bodyelem.append(classcon)
  // var oswrapper=creatwraper("os-id","os","os-name",laptop.os);
  //  console.log(oswrapper)
  console.log("--------------");
  // console.log(classcon)
}
var checkboxes = document.querySelectorAll(".brand-filter")
// console.log(checkboxes)

function checkfun(checkbox){
  // console.log(checkbox);
  checkbox.addEventListener("click" , function(){
    var store=this.value;
    console.log(store);
  })

}
checkboxes.forEach(checkfun)
products.forEach(accessSpecs);