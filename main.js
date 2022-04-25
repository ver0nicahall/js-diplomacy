'use strict';

//add event listener to button 

function changeColor() {
    const colorChanges = document.querySelectorAll('.color-change');
    for (let colorChange of colorChanges) {
        colorChange.classList.add('red');
    }
}

function validateNumber(evt) {
    //prevent event default
    evt.preventDefault();

    const numberInput = document.querySelector('#number-input');
    const userNum = Number(numberInput.value); //typecast to num

    //if input is greater than 10 or NAN
    if( userNum > 10 || userNum === NaN) {
        //error message
        document.querySelector('#formFeedback').innerHTML = 'Please enter a smaller number.';
    //otherwise
    } else {
        //good to go!
        document.querySelector('#formFeedback').innerHTML = 'You are good to go!'
    }

}

//attach event listeners 
document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateNumber);