function repeat(string, count){
   
    let result = "";
    for (let i = 0; i < count; i += 1){
        result += string;
        
    }
    return result;
    
}
console.log(repeat("abc", 3))
