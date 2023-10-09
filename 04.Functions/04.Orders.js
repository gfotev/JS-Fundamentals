function order(product, quantity) {

    let total = 0;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    let coffeePrice = 1.50;

    switch (product) {
        case "coffee":
            total = coffeePrice * quantity;
            break;
        case "water":
            total = waterPrice * quantity;
            break;
        case "coke":
            total = cokePrice * quantity;
            break;
        default:
            total = snacksPrice * quantity;
            break;          
    }
    return total.toFixed(2);
}

