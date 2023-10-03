function solve(elements1, elements2) {


    for (let number1 of elements1) {
        let result = "";
        for (let number2 of elements2) {
            if (elements2.includes(number1)) {
                result = number1;
            }
        }
        console.log(result)
    }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])