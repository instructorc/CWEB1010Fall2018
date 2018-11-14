/*
    Author: C. Fulton
    Description: Simple script that calculates two values input by the user and 
                 calculates total.


*/

function calcTotal(){
    //Declare variables
    var number_one, number_two, total;

    //target the two input boxes and get the value
    number_one = document.getElementById("box_one").value;
    number_two = document.getElementById("box_two").value;

    //Calcuate the total by adding number_one and number_two
    total = parseInt(number_one) + parseInt(number_two);

    //Testing to make sure variables are being assigned
    console.log("First Value: " + number_one + " Second Value: " + number_two);

    //target the element that I want to ouput to and input inside of tag
    document.getElementById('output').innerHTML = total;
}