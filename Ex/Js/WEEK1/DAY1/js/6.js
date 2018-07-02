var listenPlate = document.getElementById('listenPlate'),
    shakeBtn = document.getElementById('shakeBtn');
var n = 0,
    range1 = 'ACEFGBO',
    range2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
shakeBtn.onclick = function () {
    n++;
    if (n > 3) {
        alert('不能再摇号了!');
        return;
    }
    var result = '';
    result += '京' + range1[random(0, 6)];
    for (var i = 0; i < 5; i++) {
        result += range2[random(0, 35)];
    }
    listenPlate.innerHTML = result;
};
function random(n, m) {
    return Math.round(Math.random() * (m - n) + n);
}