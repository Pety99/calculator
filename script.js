
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    let ret = 1;
    for (let i = 0; i < b; i++) {
        ret *= a;
    }
    return ret;
}

function factorial(limit) {
    if (limit === 0) {
        return 1;
    }
    else {
        ret = 1;
        for (let i = 1; i <= limit; i++) {
            ret *= i;
        }
        return ret;
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return (subtract(a, b));
        case "*": return (multiply(a, b));
        case "/": return (divide(a, b));
    }
}

var values = [];
const result = document.querySelector('.result');
displayValue = result.textContent;
realValue = result.textContent;
const digits = document.querySelectorAll('.digit');
digits.forEach(element => {
    element.addEventListener('click', () => {
        if (realValue.length <= 8) {
            displayValue += element.textContent;
            realValue += element.textContent;
            result.textContent = displayValue;

            if(parseFloat(getComputedStyle(result).fontSize) >= 20){
                resizeText();
            }
        }
    });
});

const clear = document.querySelector('.C');
clear.addEventListener('click', () => {
    displayValue = '';
    realValue = '';
    result.textContent = displayValue;
    opList.length = 0;
    values.length = 0;
    // Return to the original fontSize
    result.style.fontSize = getComputedStyle(document.documentElement).getPropertyValue('--inputSize');
});

var opList = [];
const operators = document.querySelectorAll('.operator');
operators.forEach(element => {
    element.addEventListener('click', () => {
        if (realValue != '') {
            values.push(realValue);
            opList.push(element.textContent);
            realValue = '';
            displayValue += ' ' + element.textContent + ' ';
            result.textContent = displayValue


        }
    });
});

function resizeText() {
    style = getComputedStyle(result)
    let fontSize = style.fontSize;
    let resWidth = (result.textContent.length * parseFloat(fontSize) / 2) +15;
    style2 = getComputedStyle(document.querySelector('.input'));
    let containerWidth = style2.width;

    if (parseFloat(resWidth) >= parseFloat(containerWidth)) {
        resWidth = parseFloat(fontSize);
        result.style.fontSize = `${parseFloat(fontSize) - 1}px`;
        resizeText();
    }

}

