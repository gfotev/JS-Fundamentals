// function solve(array){
//     console.log(array.reverse().join(" "))
// }
// solve(["a", "b", "c", "d", "e"])

function solve(array) {

    for (let i = 0; i < array.length / 2; i++) {
        let j = array.length - 1 - i;
        let t = array[i];
        array[i] = array[j];
        array[j] = t;


    }
    console.log(array.join(" "));
}

solve(["a", "b", "c", "d", "e"])