function solve(array) {

    while (array.length > 1) {
        let condensed = [];
        
        for (let i = 0; i < array.length - 1; i += 1) {
            //condensed.push(array[i]);
            condensed[i] = array[i] + array[i + 1];

        }
        array = condensed

    }
    console.log(Number(array))
}
solve([2,10,3])
solve([1]);