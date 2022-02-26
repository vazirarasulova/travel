var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__button");
var elWalker = document.querySelector(".travel__length-walker");
var elBicycle = document.querySelector(".travel__length-bicycle");
var elCar = document.querySelector(".travel__length-car");
var elPlan = document.querySelector(".travel__length-plane");

elForm.addEventListener("submit", function(e){
  e.preventDefault();

  var elValue = elInput.value;
  var walkerSpead = 3.6;
  var bicycleSpead = 20.1;
  var carSpead = 70;
  var planeSpead = 800;

  function walker(){
    return elValue / walkerSpead;
  }

  function bicycle(){
    return elValue / bicycleSpead;
  }

  function car(){
    return elValue / carSpead;
  }

  function plane(){
    return elValue / planeSpead;
  }

  elWalker.textContent = Math.round(walker())+ " soat";
  elBicycle.textContent = Math.round(bicycle()) + " soat";
  elCar.textContent = Math.round(car()) + " soat";
  elPlan.textContent = Math.round(plane()) + " soat";
})
