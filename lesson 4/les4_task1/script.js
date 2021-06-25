let number = Number(prompt('Введите число'));

function transformation(number){
    if (number>=0 && number<=999) {
        var result = {
            'единицы': parseInt(number % 10),
            'десятки': parseInt((number % 100)/10),
            'сотни': parseInt((number % 1000)/100),
        }
    }else{
        var result={};
        console.log('Число не входит в промежуток от 0 до 999.');

    }
    return result;
};

console.log(transformation(number));