// Assignment Code
//To do: 
    //logic: create a random string of characters that are unique and do not duplicate
    //create an array for special characters
    //create an array for numbers
    //create an array for uppercase letters
    //create an array for lowercase letters 
    //create prompts for different criteria: how many characters, confirm you want numbers, uppercase and lowercase 
        //-prompts will have if/else statements (if they click ok on special characters it goes to that array, if cancel do not include array)
    //create functions for randomizing items, function for generating the password, function for prompting the users
var generateBtn = document.querySelector("#generate");

//Creates and array of special characters to be used in our password if truthy
var specialChars = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'

];



//Creates an array of lower case letters to be generated in our password if truthy
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Creates an array of upper case letters to be generated in our password if truthy 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//creates an array of numbers to be generated in our password if truthy
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//creates a variable to put into global memory of the total number of characters of the password which can be between 8 and 128
var charTotal = [0 to 128]!!


//randomizing function 
function gettingRandomChar(array) {
    //grab random index from selected array
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomChar = array[randomIndex];

    return ramdomChar;
    
};

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
//generates confirm box which takes in true or false whether we want to use special characters in our password that we generate
var confirmSpecialChar = confirm("Do you want to use special characters in your password?");
//generates confrim box which takes in true or false whether we want to use numbers in our password
var confrimNumbers = confirm("Do you want to use numbers numbers in your password?");
//generates confirm box which takes in true or falase whether we want to use uppercase letters in our password
var confirmUpperCase = confirm("Do you want to use uppercase letters in your password?");
//generataes confirm box which takes in true or false whether we want to use lowercase letters in our password
var confirmLowerCase = confirm("Do you want to use lowercase letters in your password?");
//genereates a prompt box which ask the user how many charachters long they would like the password
var confirmStrlength = prompt("How long would you like the password to be?")
console.log(confirmSpecialChar);
console.log(confrimNumbers);
console.log(confirmUpperCase);
console.log(confirmLowerCase);
//If-else conditional statements for boleon statement prompts
//if the boleon statement on confirmSpecialChar is truthy, run the following funtion/method
if(confirmSpecialChar === true) {
    function gettingRandomChar(specialChars)
}
//if the boleon statement on confirmNumbers is truthy, run the following function/method
else if(confrimNumbers === true) {
    function gettingRandom(numbers)
};
//if the boleon statement on confirmUpperCase is truthy, run the following function/method
else if(confirmUpperCase === true) {
    function gettingRandomChar(upperCase)
};
//if the boleon statement on confirmLowerCase is truthy, run the following function/method
else if(confirmLowerCase === true) {
    function gettingRandomChar(lowerCase)
};

    //running loop to check if all variables are false. If so, user is prompted to select again
   if (confirmLowerCase == false && confirmUpperCase == false && confrimNumbers== false && confirmSpecialChar == false) {
        alert("Please select one type of character");
        confirmLowerCase=confirm("Do you want to include lowercase characters?");
        confirmUpperCase=confirm("Do you want to include uppercase characters?");
        confrimNumbers=confirm("Do you want to include numeric characters?");
        confirmSpecialChar=confirm("Do you want to include special characters?");
    }
