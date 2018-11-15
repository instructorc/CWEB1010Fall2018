/* 
    AUTHOR: C.Fulton   11-14-2018
    This script will get the input from two text boxes 
    and calculate the total value.
*/

//calcTotal(); //Involkes or call function
//Specify a function that calculates total
function calcTotal(){
    //Declaring variables
    var numberOne, numberTwo, total, totalMulti;

    //Two statements that gathers the value for each textbox
    numberOne = document.getElementById("box_one").value;
    numberTwo =  document.getElementById("box_two").value;

    //Simply calculation adding the two numbers
    total = parseInt(numberOne) + parseInt(numberTwo);

    //Mulitply the two numbers
    totalMulti = parseInt(numberOne) * parseInt(numberTwo);

    document.getElementById('output').innerHTML = "The numbers added: " + total + " The numbers multiplied: "+ totalMulti;
    //Using console.log to test and make sure variables are assigned
    console.log("First value is: " + numberOne + " Second value is: " + numberTwo);
}