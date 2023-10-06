function formatGrade(grade){
    
    let result = ""
    
    if (grade < 3){
        result = "Fail";
        grade = 2;
    } else {
        if (grade < 3.50){
            result = "Poor";
        } else if (grade < 4.50){
            result = "Good";
        }else if (grade < 5.50){
            result = "Very good";
        } else {
            result = "Excellent";
        }
        grade = grade.toFixed(2)
    }
    
    console.log(`${result} (${grade})`)
}
formatGrade(3.33)