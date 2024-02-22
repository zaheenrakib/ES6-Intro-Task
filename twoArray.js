let first = [5,7,8,9,10];
let second = [14,46,67,50];

let addTwoArray = (first , second) => {
    const addSumTwo = [...first,...second];
    const maxNumber = Math.max(...addSumTwo);
    console.log(maxNumber);
}

addTwoArray(first,second);