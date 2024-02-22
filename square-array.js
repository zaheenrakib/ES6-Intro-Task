const numArray = [2,4,6,8,10];

const squareArray = numArray => {
    let sum = 0;
    for(nums of numArray){        
        const squared = nums * nums;
        sum = sum + squared;
    }
    return sum;
}

console.log(squareArray(numArray));;