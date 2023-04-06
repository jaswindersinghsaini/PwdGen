// Assignment code here
var lwrCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = 1234567890;
var specialChar = "~`!@#$%^&*()_{}[]|<>,.?/";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passChar = "";
var password = "";
function generatePassword() {

  //To get user input for password length until it fulfills the criteria
  var userInputlength;

  do {
    userInputlength = prompt("Please enter password lenghth between 8 to 128");
  } while (userInputlength < 8 && userInputlength || userInputlength > 128 && userInputlength);

//To get user choice for Lowercase character
  var lowercaseInput = confirm("Press Ok to include Lowercase character");

  if (lowercaseInput == true) {
    lowercaseInput = lwrCase;
  } else {
    alert("Lowercase character not chosen")

    lowercaseInput = "";
  }

//To get user input for Uppercase character
  var uppercaseInput = confirm("Press Ok to include Uppercase character");

  if (uppercaseInput == true) {
    uppercaseInput = upperCase;
  } else {
    alert("Uppercase character not chosen")

    uppercaseInput = "";
  }

//To get user input for Numerical character
  var numericInput = confirm("Press Ok to include Numeric character");

  if (numericInput == true) {
    numericInput = nums;
  } else {
    alert("Numerical character not chosen")

    numericInput = "";
  }

//To get user input for Special characters or Symbols
  var specialInput = confirm("Press Ok to include Special character");

  if (specialInput == true) {
    specialInput = specialChar;
  } else {
    alert("Special character not chosen")

    specialInput = "";
  }

  passChar = (lowercaseInput + uppercaseInput + numericInput + specialInput);

// To generate random password per user chosen length
  for (var i = 1; i <= userInputlength; i++) {

    var random = Math.floor(Math.random() * passChar.length);
    password += passChar.substring(random, random + 1);

  }

  return password;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

