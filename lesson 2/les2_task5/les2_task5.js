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
let a = Number(prompt('Введите первое число')), b = Number(prompt('Введите второе число'));
console.log(plus(a,b));
console.log(minus(a,b));
console.log(div(a,b));
console.log(mult(a,b));
