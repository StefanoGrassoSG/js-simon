const getStart = document.getElementById('start')
const myContainer = document.querySelector('.numbers');

const userNumbers = []
const correct = [];



getStart.addEventListener('click', function(){
    score = 0;
    myContainer.innerHTML = '';
    const numberArray = [];
    addNumbers(5, 1, 5, numberArray);
    createElement(numberArray);
    addVisible();
    setTimeout (
        addInvisible, 3000,
    );
    setTimeout (
        function() {
            let info1 = prompt('insert numbers')
            let info2 = prompt('insert numbers')
            let info3 = prompt('insert numbers')
            let info4 = prompt('insert numbers')
            let info5 = prompt('insert numbers')
            userNumbers.push(info1, info2, info3, info4, info5);
            console.log(numberArray)
            console.log(userNumbers)
            for(i = 0; i < numberArray.length; i++) {
                if(numberArray[i] == userNumbers[i]) {
                    score++
                    correct.push(userNumbers[i]);
                }
            }
            document.querySelector('.scores').innerHTML = "YOUR SCORE: " + score;
            document.querySelector('.number').innerHTML = "CORRECT NUMBERS: " + correct;
        },
        4000,
       );
    
    
    
   
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

function addVisible() {
    const squares = document.querySelectorAll('.square')
    for(i = 0; i < squares.length; i++) {
        squares[i].classList.add('visible')
    }
}

function addInvisible() {
    const squares = document.querySelectorAll('.square')
    for(i = 0; i < squares.length; i++) {
        squares[i].classList.add('invisible')
    }
}