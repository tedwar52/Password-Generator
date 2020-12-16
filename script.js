// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = prompt("How many characters long would you like your password? (8-128characters)");
  console.log(length);
  
  var criteria = confirm("Does your password require special criteria?");
  if (criteria) {
    var lower = confirm("Do you require lowercase letters?");
    var upper = confirm("Do you require uppercase letters?");
    var numbs = confirm("Do you require any numbers?");
    var special = confirm("Do you require any special characters?");
  }
  

}

//Generator functions
//this will display a random number 0-9
console.log(Math.floor(Math.random() * 9));

function getRandomNumber() {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomLower() {
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  return lettersLower[Math.floor(Math.random() * lettersLower.length)];
};
console.log(getRandomLower());

function getRandomUpper() {
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
};
console.log(getRandomUpper());

function getRandomSymbol() {
  const symbols = "!#$%&*/-+";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
console.log(getRandomSymbol());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

