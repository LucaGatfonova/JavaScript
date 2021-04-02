function add(a, b) {
    return (a + b);
}
function subtract(a, b) {
    return (a - b);
}
function div (a, b) {
    return (a / b);
}
function mult (a, b) {
    return (a * b);
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return add(arg1, arg2);
        case '-': 
            return subtract(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        case '*':
            return mult(arg1, arg2);
    }
}

mathOperation(10, 3, "+")
mathOperation(10, 3, "-")
mathOperation(10, 3, "/")
mathOperation(10, 3, "*")
