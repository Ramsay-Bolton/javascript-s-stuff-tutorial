//function fun1() {
//	var rng = document.getElementById('r1');
//        var inp = document.getElementById('i1');
//        inp.value = rng.value;
//}
function fun1() {
    var rng = document.getElementById('r1');
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
}