let Basket = {
    shopping_cart: [
        {
            id_product: 111,
            name_product: 'Видеокарта',
            cost_product: 35000,
            quantity_product: 1
        },
        {
            id_product: 222,
            name_product: 'Оперативная память',
            cost_product: 5000,
            quantity_product: 4
        },
        {
            id_product: 333,
            name_product: 'SSD',
            cost_product: 3500,
            quantity_product: 2
        }
    ],

    countBasketPrice(){
        return this.shopping_cart.reduce((totalPrice, cartItem)=>totalPrice+=cartItem.cost_product*cartItem.quantity_product,0)
    }
};

console.log(Basket.countBasketPrice());