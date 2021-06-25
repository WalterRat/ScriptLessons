function power(val, pow) {
    if (pow === 1) {
        return val
    }
    if (pow !== 1) {
        return val * power(val, pow - 1)
    }
}
console.log(power(Number(prompt('Введите первое число')), (Number(prompt('Введите второе число')))));