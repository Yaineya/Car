"use strict";

window.onload = function () {
  // по фарам
  // let lamp = document.querySelector(".lamp");
  var lamp_btn = $("[data-js=hoodLamps]");
  var elementLamps = document.querySelectorAll(".hood .lamp"); // по аварийке

  var btn_emergency = document.querySelector(".emergency");
  var turn = document.querySelector(".turn_signal"); // lamp.addEventListener("click",head_Lamp); = то что ниже

  lamp_btn.on("click", head_Lamp);
  btn_emergency.addEventListener("click", emerg);

  function head_Lamp() {
    elementLamps.forEach(function (lamp) {
      // if (lamp.className.includes("off")) {
      //     lamp.className = "on"
      // } else {
      //     lamp.className = "off"
      // }
      var classList = lamp.classList;
      var isOff = classList.contains('off');

      if (isOff) {
        classList.add('on');
        classList.remove('off');
      } else {
        classList.remove('on');
        classList.add('off');
      } // l.className = l.className === "lamp_off" 
      //     ? "lamp_on"
      //     : "lamp_off"

    });
  }

  function emerg() {}

  ; //     document.addEventListener('click', function(e) {
  //         var classList = e.target.classList;
  //         var isLamp = classList.contains('lamp');
  //         if (!isLamp) return;
  //         var isOn = classList.contains('on');
  //         if (isOn) classList.remove('on');
  //         else classList.add('on');
  //     });
};