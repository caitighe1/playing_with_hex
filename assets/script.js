//created an array with all of the possible combinations for hex code
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//created two variables to grab each element
const button = document.getElementById('btn')
const color = document.querySelector('color');

//when the user clicks the button, function with work through a for loop grabbing six random letters and 
//numbers from the array and then will be added to the #
btn.addEventListener("click", function() {
    let hexCode = "#";
    for (let i= 0; i <6; i++) {
       hexCode += hex[getRandomNumber()];
       
       document.body.style.backgroundColor = hexCode;
       color.textContent = hexCode;
    }
} )