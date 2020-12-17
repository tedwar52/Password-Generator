// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const passLength = prompt("How many characters long would you like your password? (8-128characters)");
  console.log(passLength);
  
  var criteria = confirm("Does your password require special criteria?");
  if (criteria) {
    var upper = confirm("Do you require uppercase letters?");
    if(upper === true) {
      pass += getRandomUpper();
      pass += getRandomLower();
      console.log("letters generated " + pass);
    } else {
      pass += getRandomLower();
      console.log("only lowercase letters generated " + pass);
    }
    var numbs = confirm("Do you require any numbers?");
    if(numbs === true) {
      pass += getRandomNumber();
      console.log("numbers generated " + pass);
    }
    var special = confirm("Do you require any special characters?");
    if(special === true) {
      pass += getRandomSymbol();
      console.log("symbols generated " + pass);
    }
  }

  /*
  var password = ""
  for (var i=0; i < passLength; i++) {
    password = password +
  }
  */
  
  /*
  var passwordLength = passlength;
  for (var i=0; i < passwordLength.length; i++) {
    pass +=
  }
  */
  /*
  const hasLower = lower === true;
  const hasUpper = upper === true;
  const hasNumbs = numbs === true;
  const hasSpecial = special === true;
  console.log(hasLower, hasUpper, hasNumbs, hasSpecial);
  */
  
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

