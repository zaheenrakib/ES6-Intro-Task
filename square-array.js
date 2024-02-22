const numArray = [2, 4, 6, 8, 10];

const squareArray = numArray.map(num => num * num);

let sum = 0;
for (let i = 0; i < squareArray.length; i++) {
    sum += squareArray[i];
}
console.log(sum);
const average = sum / squareArray.length;

console.log(average);
