function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;

    let operators = /^[0-9+\-*/(). ]+$/
    if (!operators.test(expression)) {
        document.getElementById('display').value = "Error";
        return;
    }
    let result = new Function('return ' + expression)();
    document.getElementById('display').value = result;
}

function clearLastChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Last character remove karega
}