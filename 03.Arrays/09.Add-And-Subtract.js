function solve(nums) {
    
    let newArray = [];
    let sum = 0;
    let sumNew = 0;

    for (let i = 0; i < nums.length; i += 1) {
        sum += nums[i];
        if (nums[i] % 2 == 0) {
            newArray.push(nums[i] + i)
            sumNew += (nums[i]) + i;
        } else {
            newArray.push(nums[i] - i);
            sumNew += (nums[i]) - i;
        }
    }
    console.log(newArray);
    console.log(sum);
    console.log(sumNew);
}
solve([5, 15, 23, 56, 35])