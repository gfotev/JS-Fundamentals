function solve(arr1, arr2) {
    
    let result = ""
    let newArray = [];
    
    for (let i = 0; i < arr1.length; i += 1) {
        
        if (i % 2 == 0) {
            newArray.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            newArray.push((arr1[i]) + (arr2[i]));
        }

    }
    console.log(newArray.join(" - "));
}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])