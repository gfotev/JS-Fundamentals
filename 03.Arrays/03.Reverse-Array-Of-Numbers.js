function reverse(num, array) {
    
    let newArray = [];
    
    for (let i = num - 1; i >= 0; i--) {
        array[i] = newArray.push(array[i]);
    }
    console.log(newArray.join(" "))
}
reverse(4, [-1, 20, 99, 5])