// Assignment code here

var chosenLength = 0;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;

//prompt for criteria

//password length
function passwordLength() {
  chosenLength = window.prompt("Enter a password length between 8 and 128 characters")

  if (chosenLength >= 8 && chosenLength <= 128) {
    characterType();
  } else {
    window.alert("Please enter a valid number!");

    passwordLength();
  }
}

//character types
function characterType() {
  if (window.confirm("Include lowercase letters?")) {
    lowercase = true;
  }

  if (window.confirm("Include uppercase letters?")) {
    uppercase = true;
  }

  if (window.confirm("Include numbers?")) {
    numeric = true;
  }

  if (window.confirm("Include Special Characters")) {
    special = true;
  }

  if (uppercase === true || lowercase === true || numeric === true || special === true) {
    generatePassword();
  } else {
    window.alert("You must select at least one option!");

    characterType();
  }

}
//generate password

function generatePassword() {
  var lowercase_string = "abcdefghijklmnopqrstuvwxyz";
  var uppercase_string = lowercase_string.toUpperCase();
  var numeric_string = "0123456789";
  var special_string = "!#%')+-/;=?[]_{}";
  var final_string = ""
  var current_pass = "";

  if (lowercase === true) {
    final_string += lowercase_string;
  }

  if (uppercase === true) {
    final_string += uppercase_string;
  }

  if (numeric === true) {
    final_string += numeric_string;
  }

  if (special === true) {
    final_string += special_string;
  }

  for (i = 0; i < chosenLength; i++) {
    current_pass += final_string.charAt(Math.floor(Math.random() * final_string.length));
  }

  console.log(current_pass);

}

passwordLength();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
