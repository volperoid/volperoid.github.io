function audit() {
    if (document.getElementById('i19').value < 0 || document.getElementById('i19').value > 9) {
        document.getElementById('i19').style.color = 'red';
    }
    if (document.getElementById('i19').value >= 0 && document.getElementById('i19').value <= 9) {
        document.getElementById('i19').style.color = 'lightsteelblue';
    }
}