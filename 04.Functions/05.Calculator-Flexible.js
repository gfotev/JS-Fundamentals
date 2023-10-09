function calculator(a, b, operator){
    
    let add = (a, b) => a + b;         // Правиш пресмятанията като функци
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let operations = [           // Правиш масив с функциите
        add,
        subtract,
        multiply, 
        divide,
    ]

    let operationNames = [  // правиш масив с имена на оператори , може и "+ - * /"
        "add",
        "subtract",
        "multiply",
        "divide",
    ]

    let index; // променлива , в която да запазиш "i" извън цикъла отдолу

    for (let i = 0; i < operationNames.length; i++){ /* цикъл който обхожда имената на операциите, 
                                                        ако съвпадат с operator зададен на входа,
                                                        index = i,  */
        if (operator == operationNames[i]){            
            index = i
        }
    }
    
    let operation = operations[index]                  // още една промелива където да изкараш резултата
    
    console.log(operation(a, b))
}
calculator(3, 5 , "add")    

