let Basket = [
  ['Видеокарта', 35000, 1],
  ['Оперативная память', 5000,4],
  ['SSD', 3500,2],
];

function countBasketPrice(Basket){
    let fullPrice = 0;
    for(let i = 0; i<Basket.length; i++){
        fullPrice+=Basket[i][1]*Basket[i][2];
    }
    return fullPrice;
}

console.log(countBasketPrice(Basket));