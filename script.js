window.onload = function () {

    // по фарам
    let lamp_btn = $("[data-js=hoodLamps]");
    lamp_btn.on("click", head_Lamp);  // lamp.addEventListener("click",head_Lamp); = то что ниже

    let elementLamps = document.querySelectorAll(".lamp");
  
    function head_Lamp() {
        elementLamps.forEach((lamp, i, arr) => {
            // console.log(elementLamps===arr,i);
            let classList = lamp.classList;

            let isOff = classList.contains('off');
            let isHighOn = classList.contains('high') || classList.contains('on');

            if (isOff) {
                classList.remove('off','high');
                classList.add('on');
            } else if(isHighOn) {
                classList.remove('on','high');
                classList.add('off');
            } 
        })
    }

    // по фарам дальний свет
    let btn_high_beam = $('.highBeam');
    btn_high_beam.on("click", high_beam);

    function high_beam() {
        elementLamps.forEach((lamp) => {
            let classList = lamp.classList;
            let isOffON = classList.contains('off') || classList.contains('on');

            if (isOffON) {
                classList.add('high');
                classList.remove('on','off');
            } else if (classList.contains('high')) {
                classList.remove('high');
                classList.remove('on');
                classList.add('off');
            } 
        }
        )
    }
    // btn_high_beam.on("dblclick", high_beam);
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
    let stop_btn = $('.stop_btn');
    let elemBody = $('body');

    let elemementsStop = document.querySelectorAll(".stop_signal ");   // let elemementsStop = $((".luggage").children(".stop_signal "));  // быстрый способ поиска элемента через метод .children

    stop_btn.on("mousedown", stop_down);
    elemBody.on("mouseup", stop_up);

    function stop_down() {
        elemementsStop.forEach((elemementsStop) => {
            let classList = elemementsStop.classList;
            let isOff = classList.contains("off");
            console.log("сработал Маус Даун");
            if (isOff) {
                classList.add('on');
                classList.remove('off');
            }
        }
        )
    }

    function stop_up() {
        elemementsStop.forEach((elemementsStop) => {
            let classList = elemementsStop.classList;
            let isOff = classList.contains("on");
            console.log("сработал Маус Ап");
            if (isOff) {
                classList.remove('on');
                classList.add('off');
            }
        }
        )
    }

    // по аварийке
    let btn_emergency = $(".emergency");
    btn_emergency.on("click", emerg);
    let elemTurnSignal = document.querySelectorAll('.turn_signal');

    function emerg() {
        elemTurnSignal.forEach((lamp) => {
            lamp.classList.toggle('on');
        })
    }

    // поворот налево
    let btn_turn_left = $('.btn_left');
    btn_turn_left.on('click', turnLeft);
    let elemLeft = document.querySelectorAll('.left');

    function turnLeft() {
        elemLeft.forEach((lamp)=>{
            lamp.classList.toggle('on');
        })
    }

    // поворо направо
    let btn_right = $('.btn_right');
    btn_right.on('click',turnRight);
    let elemRight = document.querySelectorAll('.turn_signal.right');

    function turnRight(){
        elemRight.forEach((lamp)=>{
            lamp.classList.toggle('on');
        })
    }

};
    