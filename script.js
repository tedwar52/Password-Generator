// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  prompt("How many characters long would you like your password? (8-128characters)");
  confirm("Does your password require special criteria?");
  confirm("Do you require lowercase letters?");
  confirm("Do you require uppercase letters?");
  confirm("Do you require any numbers?");
  confirm("Do you require any special characters?")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

