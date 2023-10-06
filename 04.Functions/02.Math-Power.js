function power(num, exponent){
    let product = 1;
    
    for(let i = 0; i < exponent; i += 1){
        product *= num;
    }
    console.log(product);
}
power(2, 8)