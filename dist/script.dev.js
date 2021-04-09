"use strict";

window.onload = function () {
  // по фарам
  var lamp_btn = $("[data-js=hoodLamps]");
  lamp_btn.on("click", head_Lamp); // lamp.addEventListener("click",head_Lamp); = то что ниже

  var elementLamps = document.querySelectorAll(".lamp");

  function head_Lamp() {
    elementLamps.forEach(function (lamp, i, arr) {
      // console.log(elementLamps===arr,i);
      var classList = lamp.classList;
      var isOff = classList.contains('off');
      var isHighOn = classList.contains('high') || classList.contains('on');

      if (isOff) {
        classList.remove('off', 'high');
        classList.add('on');
      } else if (isHighOn) {
        classList.remove('on', 'high');
        classList.add('off');
      }
    });
  } // по фарам дальний свет


  var btn_high_beam = $('.highBeam');
  btn_high_beam.on("click", high_beam);

  function high_beam() {
    elementLamps.forEach(function (lamp) {
      var classList = lamp.classList;
      var isOffON = classList.contains('off') || classList.contains('on');

      if (isOffON) {
        classList.add('high');
        classList.remove('on', 'off');
      } else if (classList.contains('high')) {
        classList.remove('high');
        classList.remove('on');
        classList.add('off');
      }
    });
  } // btn_high_beam.on("dblclick", high_beam);
  // function high_beam() {
  //     elementLamps.forEach((lamp) => {
  //         let classList = lamp.classList;
  //         let isOffON = classList.contains('off') || classList.contains('on');
  //         if (isOffON) {
  //             classList.add('high');
  //             classList.remove('on','off');
  //         } else if (classList.contains('high')) {
  //             classList.remove('high');
  //             classList.remove('off');
  //             classList.add('on');
  //         } 
  //     }
  //     )
  // }
  //по стопам


  var stop_btn = $('.stop_btn');
  var elemBody = $('body');
  var elemementsStop = document.querySelectorAll(".stop_signal "); // let elemementsStop = $((".luggage").children(".stop_signal "));  // быстрый способ поиска элемента через метод .children

  stop_btn.on("mousedown", stop_down);
  elemBody.on("mouseup", stop_up);

  function stop_down() {
    elemementsStop.forEach(function (elemementsStop) {
      var classList = elemementsStop.classList;
      var isOff = classList.contains("off");
      console.log("сработал Маус Даун");

      if (isOff) {
        classList.add('on');
        classList.remove('off');
      }
    });
  }

  function stop_up() {
    elemementsStop.forEach(function (elemementsStop) {
      var classList = elemementsStop.classList;
      var isOff = classList.contains("on");
      console.log("сработал Маус Ап");

      if (isOff) {
        classList.remove('on');
        classList.add('off');
      }
    });
  } // по аварийке


  var btn_emergency = $(".emergency");
  btn_emergency.on("click", emerg);
  var elemTurnSignal = document.querySelectorAll('.turn_signal');

  function emerg() {
    elemTurnSignal.forEach(function (lamp) {
      lamp.classList.toggle('on');
    });
  } // поворот налево


  var btn_turn_left = $('.btn_left');
  btn_turn_left.on('click', turnLeft);
  var elemLeft = document.querySelectorAll('.left');

  function turnLeft() {
    elemLeft.forEach(function (lamp) {
      lamp.classList.toggle('on');
    });
  } // поворо направо


  var btn_right = $('.btn_right');
  btn_right.on('click', turnRight);
  var elemRight = document.querySelectorAll('.turn_signal.right');

  function turnRight() {
    elemRight.forEach(function (lamp) {
      lamp.classList.toggle('on');
    });
  }
};