function printValue(digit) {
    let oldValue = document.getElementById("calc-display").value; // The calculator looks at what is present on its display.
    document.getElementById("calc-display").value = oldValue + digit; // It then adds the new input to the current state of the display; otherwise, any input would replace the previous one.
}
;
