const numArray = [2, 4, 6, 8, 10];

const squareArray = numArray => {
    const squareArray = numArray.map(num => num * num);

    let sum = 0;
    for (let i = 0; i < squareArray.length; i++) {
        sum += squareArray[i];
    }
    const average = sum / squareArray.length;
    return average;
}

console.log(squareArray(numArray));