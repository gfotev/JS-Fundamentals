function equalSums2(array) {
    
    let isFound = false;

    for (let a = 0; a < array.length; a += 1) {
        let leftSum = 0;
        let rightSum = 0;

        for (let b = 0; b < a; b += 1) {
            leftSum += array[b];
        }

        for (let c = array.length - 1; c > a; c -= 1) {
            rightSum += array[c];
        }

        if (leftSum === rightSum) {
            isFound = true;
            console.log(a);
            break;
        }
    }

    if (!isFound) {
        console.log("no");
    }
}

equalSums2([1]);

equalSums2([1, 2, 3, 3])
// equalSums([1])
//equalSums([1, 2])
// equalSums([1, 2, 3, 3])
 //equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
