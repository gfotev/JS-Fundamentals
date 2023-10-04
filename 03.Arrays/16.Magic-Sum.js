function sum(array, num){
    let result = "";
    let outerNum = 0;
    

    for (let i = 0; i <= array.length - 1; i += 1) {
        
         outerNum = array[i];
        
        for (let j = i + 1; j <= array.length - 1; j += 1) {
            let innerNum = array[j];

            
            if (outerNum + innerNum == num) {
                result = `${outerNum} ${innerNum}`;
                console.log(result)
            } 
           
        }
        
        
    }
}
sum([1, 7, 6, 2, 19, 23],8)
//sum([14, 20, 60, 13, 7, 19, 8],27)
//sum([1, 2, 3, 4, 5, 6],6)
