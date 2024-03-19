
let myArray = [];


// Adding of the buttons 0-9 //
function addValue(val) {

    if (errorCheck(val)) { //This is the error checker
        document.getElementById('display').value = 'Error'; // down on line '39' and error will occur when the signs meet twice consecutively     
        disableButtons(); // after the error is detected is will cancel all buttons excluding the clear button
        return;
    } 
    document.getElementById('display').value += val;
}

function result() {
    
   let result = eval(document.getElementById('display').value); 
   myArray.push(result); // This is storing the numbers into and Array that will be for the history of calculations
    document.getElementById('display').value = result; 
    document.getElementById('display2').value =  myArray.join(' '); // For the space between the answers given when executed
console.log(myArray);
}


// Clearing the display so you can re-enter inputs //
function clearDisplay() {
    document.getElementById('display').value = '';
    enableButtons(); // Enable buttons after clearing the display
}


// Checking for an error when two operators meet consecutively//
function errorCheck(val) {
    const displayValue = document.getElementById('display').value;
    const lastChar = displayValue[displayValue.length - 1];
    
    return lastChar && /[+\-*/]/.test(lastChar) && /[+\-*/]/.test(val);
}




















                            // EXTRA FUNCTIONS // 
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent !== 'Clear') { // Check if the button is not the clear display button
            button.disabled = true;
        }
    });
}

function enableButtons() {
     const buttons = document.querySelectorAll('button'); // Select all buttons
    buttons.forEach(button => {
        button.disabled = false; // Enable each button
    });
}

function historyCalculations() {
    document.getElementById('historyCal').html = result // result of calculation
}