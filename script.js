// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Ask the user for length
  //(Minimum of 8 characters, maximum of 128)
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Error, invalid password. \nPlease choose a password with at least 8 characters but not more than 128 characters.");
    return "";
  }

  //Ask the user for which characters to include
var includeLowerCase = confirm("Do you want to include small letters in the password?");
var includeUpperCase = confirm("Do you want to include capital letters in the password?");
var includeNumbers = confirm("Do you want to include numbers in the password?");
var includeSpecialCharacters = confirm("Do you want to include special characters in the password?");

//Validate types of characters
if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
  alert ("Error, invalid passowrd. \nPlease inlcude at least one type of character.");
  return "";
}


  //Generate a random password
let passwordCharacters = [];
var specialCharacters = "<[{>}]&*@#!%$?";
var smallLetters = "qwertyuioplkjhgfdsamnbvcxz";
var capitalLetters = "POIUYTREWQASDFGHJKLMNBVCXZ";
var numbers = "1092837465";


//TODO handle character types
if (includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}

if (includeLowerCase) {
  passwordCharacters = passwordCharacters.concat(smallLetters.split(""));
}

if (includeUpperCase) {
    passwordCharacters = passwordCharacters.concat(capitalLetters.split(""));
}
if (includeNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers.split(""));
}

let results = "";
for (var i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
  let randomCharacter = passwordCharacters[randomIndex];
  results += randomCharacter;
}

  //Return generated password
return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
