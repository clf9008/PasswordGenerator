//declaring variable for global memory for each of the possible choices for the users passwords
var enter;
var confirmNumber;
var confirmChar;
var confirmUpper;
var confirmLower;
//declaring an array for global memory that contains all the characters that could be generated in the password
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//declaring an array for global memory that contains all the numbers that could be generated in the password
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//declaring an array for global memory that contains all the letters that could be generated in the password
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Uppercase is to convert letters to uppercase
upperCase = [];
//Choices declared outside the if statement so they can be concatenated upon condition
var choices;
//declaring a variable into global memory that has a function that will take a letter and make it Uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};
//declaring a variable to global memory that coverts chosen letters to uppercase
alpha2 = alpha.map(toUpper);
//variable to create a generate button and appending that to the HTML document
var get = document.querySelector("#generate");
//Declaring an 'on click' function that listns to the 'generate' button and runs ths generatePassword funtion when clicked
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

//function to generate the password with the values chosen by the user
function generatePassword() {
    //Prompt to asking user how many characters they would like there password to be
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    //if no value is entered, alert the user the followuing 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        //if the value is below 8 or above 128 characters, prompt the user to chose a value in that range
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        //once the correct number of characters for the password is chosen, run the following prompt for Special Characters, Numbers, Uppercase, and Lowercase
        confirmNumber = confirm("Will this contain numbers?");
        confirmChar = confirm("Will this contain special characters?");
        confirmUpper = confirm("Will this contain Uppercase letters?");
        confirmLower = confirm("Will this contain Lowercase letters?");
    };

    //If the user does not chose any values, run the following alert
    if (!confirmChar && !confirmNumber && !confirmUpper && !confirmLower) {
        choices = alert("You must choose a criteria!");

    }
    //else-if statements if the user choses all four confirm variables
    else if (confirmChar && confirmNumber && confirmUpper && confirmLower) {

        choices = character.concat(number, alpha, alpha2);
    }
    //else-if statements if the user choses only three of the four confirm variables
    else if (confirmChar && confirmNumber && confirmUpper) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmChar && confirmNumber && confirmLower) {
        choices = character.concat(number, alpha);
    }
    else if (confirmChar && confirmLower && confirmUpper) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLower && confirmUpper) {
        choices = number.concat(alpha, alpha2);
    }
    //Else-if statement if the user choses only on of the four confirm variables
    else if (confirmChar && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmChar && confirmLower) {
        choices = character.concat(alpha);

    } else if (confirmChar && confirmUpper) {
        choices = character.concat(alpha2);
    }
    else if (confirmLower && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLower && confirmUpper) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUpper) {
        choices = number.concat(alpha2);
    }
    //else-if statement if user choses only on of the confirm variables
    else if (confirmChar) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLower) {
        choices = alpha;
    }
    // Created upperCase variable to fill uppercase conversion
    else if (confirmUpper) {
        choices = upperCase.concat(alpha2);
    };

    //declaring a variable to global memory that is an array placeholder for user generated amount of length
    var password = [];

    //Randomzation for loop for selection of all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    //declaring a variable for global memory that joins the password variable and returns it as a string value
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

//function to take generated password and append it to the HTML document
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
