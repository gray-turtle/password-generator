// Assignment code here

var chosenLength = 0;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;

var lowercase_string = "abcdefghijklmnopqrstuvwxyz";
var uppercase_string = lowercase_string.toUpperCase();
var numeric_string = "0123456789";
var special_string = "!#%')+-/;=?[]_{}";


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

  lowercase = false;
  uppercase = false;
  numeric = false;
  special = false;

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
    return;
  } else {
    window.alert("You must select at least one option!");

    characterType();
  }

}
//generate password

function generatePassword() {
  var pass_being_generated = "";

  var final_string = "";
  
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
    pass_being_generated += final_string.charAt(Math.floor(Math.random() * final_string.length));
  }

  console.log("unchecked password " + pass_being_generated);

  return(pass_being_generated);
}

function checkPassword(pass_to_check) {
  var lowercase_check = false;
  var uppercase_check = false;
  var numeric_check = false;
  var special_check = false;

  for (i = 0; i < chosenLength; i++) {
    var is_lowercase = lowercase_string.includes(pass_to_check.charAt(i));  
    var is_uppercase = uppercase_string.includes(pass_to_check.charAt(i));
    var is_numeric = numeric_string.includes(pass_to_check.charAt(i));

    if (is_lowercase === true) {
      lowercase_check = true;
      console.log("lowercase_check is " + lowercase_check);
    } else if (is_uppercase === true) {
      uppercase_check = true;
      console.log("uppercase_check is " + uppercase_check);
    } else if (is_numeric === true) {
      numeric_check = true;
      console.log("numeric_check is " + numeric_check);
    } else {
      special_check = true;
      console.log("special_check is " + special_check);
    }
  }

  if (lowercase === true) {
    console.log("lowercase selected");
    if (lowercase_check != true) {
      console.log("no lowercase detected");
      return(false);
    } 
  } 
  
  if (uppercase === true) {
    console.log("uppercase selected");
    if (uppercase_check != true) {
      console.log("no uppercase detected");
      return(false);
    }
  }
  
  if (numeric === true) {
    console.log("numeric selected");
    if (numeric_check != true) {
      console.log("no numeric detected");
      return(false);
    }
  }
  
  if (special === true) {
    console.log("special selected");
    if (special_check != true) {
      console.log("no special detected");
      return(false);
    }
  }
  
  console.log("completed pass " + pass_to_check);
  return(true);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  var password_to_check = generatePassword();
  // if our password is doesn't pass checks
  while (checkPassword(password_to_check) != true) {
    // regenerate
    console.log("regenerating because password to check (" + password_to_check + ") failed.");
    password_to_check = generatePassword();
  }
  //var checked_password = checkPassword(password_to_check)
  var password = password_to_check;
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
