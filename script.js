window.onload = function() {
    document.addEventListener('click', function(e) {
        var classList = e.target.classList;
        var isLamp = classList.contains('lamp');
        if (!isLamp) return;

        var isOn = classList.contains('on');
        if (isOn) classList.remove('on');
        else classList.add('on');
    });
};