/*
    Author: C.Fulton
    This a script that calculates the total based on user input
*/



//Defining
function calcTotal(){
    //Declare variables 
    var number_one, number_two, total;

    //This targets the input boxes and get the users value
    number_one = document.getElementbyId('box_one').value;
    number_two = document.getElementById('box_two').value;

    //Troubleshooting to make sure variables are being assigned appropriately
    console.log("First value: " + number_one + " Second Value: "+ number_two);

    //Calculate Total 
    total = parseInt(number_one) + parseInt(number_two);

    document.getElementById('output').innerHTML = total;
}