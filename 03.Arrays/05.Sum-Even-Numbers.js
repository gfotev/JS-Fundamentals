function solve(array) {
    
    let sum = 0;
    
    for (let i = 0; i < array.length; i += 1) {
        if (parseFloat(array[i]) % 2 == 0) {
            sum += parseFloat(array[i]);
        }

    }
    console.log(sum)
}

solve(['1', '2', '3', '4', '5', '6'])