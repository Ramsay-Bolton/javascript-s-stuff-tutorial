function move() {
    var elem = document.getElementById('myBar');
    var width = parseInt(document.getElementById('label').innerHTML);
    var id = setInterval(frame, 50);
    
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById('label').innerHTML = width + '%';
        }
    }
}