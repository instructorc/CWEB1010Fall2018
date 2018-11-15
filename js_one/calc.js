/*
    Author: C.Fulton
    This script will calculate the two values the end-user inputs and output the
    the value to the id output attribute.
*/
//getCalculation(); //Involkes the function

//Defining the function
function getCalculation(){
    //Declare variables
    var numberOne, numberTwo, numberThree, total, totalMulti;

    //Initialize variables to hold the input from text boxes
    numberOne =  document.getElementById('box_one').value;
    numberTwo = document.getElementById('box_two').value;
    numberThree = document.getElementById('box_three').value;

    //Troubleshooting to see if variables are being assigned
    console.log("First Value is: " + numberOne + " Second Value is: "+ numberTwo + " Third Value is: "+ numberThree);

    //calculate the three values received from the textbox
    total = parseInt(numberOne) + parseInt(numberTwo)+ parseInt(numberThree);

    //multiple the three values
    totalMulti = parseInt(numberOne) * parseInt(numberTwo) * parseInt(numberThree);

    document.getElementById('output').innerHTML = " The number add together: " + total + " The numbers multiplied: " + totalMulti;

}