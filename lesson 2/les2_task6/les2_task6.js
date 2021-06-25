function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return plus(arg1,arg2)
        case '-':
            return minus(arg1,arg2)
        case '*':
            return mult(arg1,arg2)
        case '/':
            return div(arg1,arg2)
        default:
            return 'Неизвестная операция'
    }
}

let a = Number(prompt('Введите первое число')), b = Number(prompt('Введите второе число'));
console.log(mathOperation(a,b, prompt('Введите операцию')))
