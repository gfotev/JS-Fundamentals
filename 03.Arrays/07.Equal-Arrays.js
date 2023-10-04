function solve(arr1, arr2) {
   
    let sum = 0;
    let isIdentical = true;
    let index = 0;

    for (let i = 0; i < arr1.length; i += 1) {
        if (parseFloat(arr1[i]) == parseFloat(arr2[i])) {
            isIdentical;
        } else {
            isIdentical = false;
        }
        if (isIdentical) {
            sum += parseFloat(arr1[i]);
        } else {
            index = `${i}`;
            break;
        }
    }
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
}

//solve(['10','20','30'], ['10','20','30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// solve("[1]", "[10]");