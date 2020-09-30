
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

function multiply(nums) {
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
        case "-": return(subtract(a,b));
        case "*": return(multiply(a,b));
        case "/": return(divide(a,b));
    }
}