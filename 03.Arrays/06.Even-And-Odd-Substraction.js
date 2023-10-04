function solve(array) {
    
    let sum1 = 0;
    let sum2 = 0;
    let totalSum = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (parseFloat(array[i]) % 2 == 0) {
            sum1 += parseFloat(array[i]);
        } else {
            sum2 += parseFloat(array[i]);
        }

    }
    totalSum = sum1 - sum2;
    console.log(totalSum)
}
solve([1, 2, 3, 4, 5, 6])