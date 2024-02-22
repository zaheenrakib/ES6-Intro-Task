function getDefultPara(num1 ,num2 = 5) {
    const sumOfNumbers = num1 + num2;
    return sumOfNumbers;
}

const getDef = getDefultPara(45);
console.log(getDef);