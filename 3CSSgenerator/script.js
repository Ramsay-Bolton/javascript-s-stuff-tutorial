
function fun1() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');
    
    
    var block = document.getElementById('block');
    
    ttl.value=rtl;
    tbl.value=rbl;
    ttr.value=rtr;
    tbr.value=rbr;
    
    block.style.borderRadius = rtl + 'px ' + rbl + 'px ' + rtr + 'px ' + rbr + 'px';
}