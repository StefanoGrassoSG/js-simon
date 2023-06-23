

const numberArray = [];

addNumbers(5, 1, 5);

console.log(numberArray);

createElement();
















function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function addNumbers(cycleNumber, min, max) {
    let count = 0;
    while (numberArray.length < cycleNumber) {
        const oneNumber = getRandomNumber(min, max);

        if(!numberArray.includes(oneNumber)) {
            numberArray.push(oneNumber)
        }

        count++;
    }
} 

function createElement() {
    const myContainer = document.querySelector('.numbers');
    for(i = 0; i < 5; i++) {
        const newDiv = document.createElement('div');
        myContainer.append(newDiv);
        newDiv.append(numberArray[i]);
        newDiv.classList.add('square')
    }

}