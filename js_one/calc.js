/*
    Author: C.Fulton
    This script will calculate the two values the end-user inputs and output the
    the value to the id output attribute.
*/
function getCalculation(){
    //Declare variables
    var numberOne, numberTwo, numberThree, total;

    //Initialize variables to hold the input from text boxes
    numberOne = document.getElementById('box_one').value;
    numberTwo = document.getElementById('box_two').value;
    numberThree = document.getElementById('box_three').value;

    //calculate the two values received from the textbox
    total = parseInt(numberOne) + parseInt(numberTwo)+ parseInt(numberThree);

    document.getElementById('output').innerHTML = total;

    console.log("First Value is: " + numberOne + " Second Value is: "+ numberTwo + " Third Value is: "+ numberThree);
}