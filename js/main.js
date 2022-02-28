var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__button");
var elWalker = document.querySelector(".travel__length-walker");
var elBicycle = document.querySelector(".travel__length-bicycle");
var elCar = document.querySelector(".travel__length-car");
var elPlane = document.querySelector(".travel__length-plane");




elForm.addEventListener("submit", function(e){
  e.preventDefault();


  if (elValue <= 0 || isNaN(elValue)){

    elWalker.textContent = "Raqam kiriting ";
    elBicycle.textContent = "Raqam kiriting ";
    elCar.textContent = "Raqam kiriting ";
    elPlane.textContent = "Raqam kiriting ";

    elWalker.classList.add("result-error");
    elBicycle.classList.add("result-error");
    elCar.classList.add("result-error");
    elPlane.classList.add("result-error");

    return
  }
   else{
    elWalker.classList.remove("result-error");
    elWalker.classList.add("result-success");
    elBicycle.classList.remove("result-error");
    elBicycle.classList.add("result-success");
    elCar.classList.remove("result-error");
    elCar.classList.add("result-success");
    elPlane.classList.remove("result-error");
    elPlane.classList.add("result-success");
  }
  
  var elValue = elInput.value;
  var walkerSpead = 3.6;
  var bicycleSpead = 20.1;
  var carSpead = 70;
  var planeSpead = 800;
  
  
  
  function walker(){
    var walkerTime =  elValue / walkerSpead;
    var walkerHours = Math.floor(walkerTime);
    var walkersMinut = Math.floor((walkerTime - walkerHours) * 60);
    var walkersTotal = (walkerHours + " soat " + walkersMinut + " minut")
    return walkersTotal;
    
  }
  
  function bicycle(){
    var bicycleTime =  elValue / bicycleSpead;
    var bicycleHours = Math.floor(bicycleTime);
    var bicycleMinut = Math.floor((bicycleTime - bicycleHours) * 60);
    var bicycleTotal = (bicycleHours + " soat " + bicycleMinut + " minut")
    return bicycleTotal;
  }
  
  function car(){
      var carTime =  elValue / carSpead;
      var carHours = Math.floor(carTime);
      var carMinut = Math.floor((carTime - carHours) * 60);
      var carTotal = (carHours + " soat " + carMinut + " minut")
      return carTotal;
    
  }
  
  function plane(){
    var planeTime =  elValue / planeSpead;
    var planeHours = Math.floor(planeTime);
    var planeMinut = Math.floor((planeTime - planeHours) * 60);
    var planeTotal = (planeHours + " soat " + planeMinut + " minut")
    return planeTotal;
    
  }
  
  
  elWalker.textContent = walker();
  elBicycle.textContent = bicycle();
  elCar.textContent = car();
  elPlane.textContent = plane();
})

