// Assignment code here

var length = 0;

//prompt for criteria

//password length
function passwordLength() {
  length = window.prompt("Enter a password length between 8 and 128 characters")

  length = length.valueOf();

  if (length >= 8 && length <= 128) {
    characterType();
  } else {
    window.alert("Please enter a valid number!");

    passwordLength();
  }
}
//character types
function characterType() {
  console.log(length);
}
//generate password

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
