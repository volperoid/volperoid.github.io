function calculate() {
    let operation = document.getElementById("calc-display").value;
    if (/^[\d()\/*.+-]+$/.test(operation)) { // ! security measure for `eval()`
        document.getElementById("calc-display").value = eval(operation);
    } else {
        alert("Only numbers and mathematical operators allowed.");
    };
};
