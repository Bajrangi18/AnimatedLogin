function clicked() {
  document.getElementById("carCont").style.transform = "translateX(15vw)";


  setTimeout(function() {
    document.getElementById("carCont").style.transform = "translateX(-100vw)";
}, 1000);


};
