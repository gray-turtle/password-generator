// Assignment code here

var length = 0;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;

//prompt for criteria

//password length
function passwordLength() {
  length = window.prompt("Enter a password length between 8 and 128 characters")

  if (length >= 8 && length <= 128) {
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
  var current_pass = "";

  for (i = 0; i < length; i++) {

    var rand = Math.floor(Math.random() * 4);

    switch (rand) {
      case 0:
        current_pass += lowercase_string.charAt(Math.floor(Math.random() * lowercase_string.length));
      
        break;
      case 1:
        current_pass += uppercase_string.charAt(Math.floor(Math.random() * uppercase_string.length));
      
        break;
      case 2:
        current_pass += numeric_string.charAt(Math.floor(Math.random() * numeric_string.length));
      
        break;
      case 3:
        current_pass += special_string.charAt(Math.floor(Math.random() * special_string.length));

        break;
    }
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
