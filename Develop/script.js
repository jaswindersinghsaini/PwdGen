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

  var userInputlength;

  do {
    userInputlength = prompt("Please enter password lenghth between 8 to 128");
  } while (userInputlength < 8 && userInputlength || userInputlength > 128 && userInputlength);


  var lowercaseInput = confirm("Press Ok to include Lowercase character");

  if (lowercaseInput == true) {
    lowercaseInput = lwrCase;
  } else {
    alert("you did not chose lower case")

    lowercaseInput = "";
  }


  var uppercaseInput = confirm("Press Ok to include Uppercase character");

  if (uppercaseInput == true) {
    uppercaseInput = upperCase;
  } else {
    alert("you did not chose upper case")

    uppercaseInput = "";
  }

  var numericInput = confirm("Press Ok to include Numeric character");

  if (numericInput == true) {
    numericInput = nums;
  } else {
    alert("you did not chose numeric character")

    numericInput = "";
  }

  var specialInput = confirm("Press Ok to include Special character");

  if (specialInput == true) {
    specialInput = specialChar;
  } else {
    alert("you did not chose special character")

    specialInput = "";
  }

  passChar = (lowercaseInput + uppercaseInput + numericInput + specialInput);


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

