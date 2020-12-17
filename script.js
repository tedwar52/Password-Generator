//-----------Defining variables-----------------------------------------

var generateBtn = document.querySelector("#generate");
var pass = "";
var password = "";

//---------Write password to the #password input------------------------

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//----------------Create the password-----------------------------------

function generatePassword() {
  //Prompt asking how long the password needs to be
  var passLength = prompt("How many characters long would you like your password? (8-128characters)");
  console.log(passLength);
  
  var criteria = confirm("Does your password require special criteria?");
  if (criteria) {
    //Will ask a series of confirm messages if password needs special criteria and will add certain elements as needed
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
  console.log(pass);

  //Create a loop using the above collected criteria to string together a password to the desired length
  for (var i=0; i < passLength; i++) {
    password += pass.charAt(Math.floor(Math.random() * pass.length));
  }
  console.log(password);

}


//---------------------Generator functions------------------------------------

function getRandomNumber() {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomLower() {
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  return lettersLower[Math.floor(Math.random() * lettersLower.length)];
};

function getRandomUpper() {
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
};

function getRandomSymbol() {
  const symbols = "!#$%&*/-+";
  return symbols[Math.floor(Math.random() * symbols.length)];
};


//---------------Add event listener to generate button---------------------------

generateBtn.addEventListener("click", writePassword());

