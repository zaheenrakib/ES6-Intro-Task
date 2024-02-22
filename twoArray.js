const first = [5,7,8,9,10];
const second = [14,46,67,50];

const addTwoArray = (first , second) => {
    const addSumTwo = first + " ," +second;
    const maxOf = Math.max(addSumTwo)
    console.log(maxOf);
}

addTwoArray(first,second);