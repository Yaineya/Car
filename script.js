// по фарам
let lamp = document.querySelector(".lamp");
let elementLamps = document.querySelector(".lamp_off");

// по аварийке
let btn_emergency= document.querySelector(".emergency")
let turn = document.querySelector(".turn_signal")

lamp.addEventListener("click",head_Lamp);
btn_emergency.addEventListener("click",emerg);


function head_Lamp() {
    if (elementLamps.className = "lamp_off") {
        elementLamps.className = "lamp_on"
    } else {
        elementLamps.className = "lamp_off"
    }
}

function emerg(){};




// window.onload = function() {
//     document.addEventListener('click', function(e) {
//         var classList = e.target.classList;
//         var isLamp = classList.contains('lamp');
//         if (!isLamp) return;

//         var isOn = classList.contains('on');
//         if (isOn) classList.remove('on');
//         else classList.add('on');
//     });
// };