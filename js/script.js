const getStart = document.getElementById('start')
const myContainer = document.querySelector('.numbers');






getStart.addEventListener('click', function(){
    myContainer.innerHTML = '';
    const numberArray = [];
    addNumbers(5, 1, 5, numberArray);
    createElement(numberArray);
})


















function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function addNumbers(cycleNumber, min, max, array) {
    let count = 0;
    while (array.length < cycleNumber) {
        const oneNumber = getRandomNumber(min, max);

        if(!array.includes(oneNumber)) {
            array.push(oneNumber)
        }

        count++;
    }
} 

function createElement(array) {
    for(i = 0; i < 5; i++) {
        const newDiv = document.createElement('div');
        myContainer.append(newDiv);
        newDiv.append(array[i]);
        newDiv.classList.add('square')
    }

}