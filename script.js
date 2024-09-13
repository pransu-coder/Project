let result = document.getElementById('result');
let expression = "";

function appendToResult(value) {
    expression += value;
    result.value = expression;
}

function calculate(operator) {
    if (operator === '=') {
        try {
            result.value = eval(expression);
            expression = "";
        } catch (error) {
            result.value = "Error";
        }
    } else {
        expression += operator;
        result.value = expression;
    }
}

function clearResult() {
    expression = "";
    result.value = "";
}

function deleteLastChar() {
    expression = expression.slice(0, -1);
    result.value = expression;
}