function solve(num) {
    
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]

    if (num >= 0 && num <= 7) {
        console.log(day[num - 1]);
    } else {
        console.log("Invalid day!")
    }

}

solve(7)