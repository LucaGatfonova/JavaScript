function add(a, b) {
    return ('Сложение: ' + (a + b));
}
function subtract(a, b) {
    return ('Вычитание: ' + (a - b));
}
function div (a, b) {
    return ('Деление: ' + a / b);
}
function mult (a, b) {
    return ('Умножение: ' + a * b);
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return console.log(add(arg1, arg2));
        case '-': return console.log(subtract(arg1, arg2));
        case '/': return console.log(div(arg1, arg2))
        case '*': return console.log(mult(arg1, arg2));
        default: return null;
    }
}

mathOperation(10, 3, "+")
mathOperation(10, 3, "-")
mathOperation(10, 3, "/")
mathOperation(10, 3, "*")