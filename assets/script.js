// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declare a password length
var passLength = 0;
// Declare password criteria array
var passCriteria = [];
// Declare lowercase letters string
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// Declare uppercase letters string
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Declare numerical characters string 
var numericChars = "0123456789";
// Declare special character subset string - does not include " and \
var specialChars1 = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Declare double quote (") and backslash (\) special characters string 
var specialChars2 = '"\\';
// Declare concatenated special characters string & use substring to get full list of special characters
var specialChars = (specialChars1 + specialChars2).substr(0, 33);
// Declare criteria selected character variable to an empty string
var criteriaChars = "";
// Declare password to an empty string
var password = "";

function writePassword() {
  // Re-set variables & clear the console if user presses generate password multiple times
  password = "";
  passLength = 0;
  passCriteria = [];
  criteriaChars = "";
  console.clear();
  getPassLength();
  getPassCriteria();
  generateCriteria();
}
// function to select valid password length
function getPassLength() {
  passLength = prompt("Please enter a password length.\nThe length must be a whole number between 8 and 128.");
  // repeat function if user enter letters, number with decimal, number <8, number >128 
  while (isNaN(passLength) || (passLength.includes(".")) || (passLength < 8) || (passLength > 128)) {
    passLength = prompt("Your entry is not valid - Please enter a password length.\nThe length must be a whole number between 8 and 128.");
  }
  passLength = parseInt(passLength)
  console.log(passLength);
}

// function to select character criteria in password
function getPassCriteria() {
  // confirm to include lowercase
  passCriteria.push(confirm("Would you like to include lowercase letters in the password?"));
  console.log(passCriteria);
  // confirm to include uppercase
  passCriteria.push(confirm("Would you like to include uppercase letters in the password?"));
  console.log(passCriteria);
  // confirm to include numbers
  passCriteria.push(confirm("Would you like to include numbers in the password?"));
  console.log(passCriteria);
  // confirm to include special characters
  passCriteria.push(confirm("Would you like to include special characters in the password?"));
  console.log(passCriteria);
  // repeat function if all criteria selections are false
  while ((!passCriteria[0]) && (!passCriteria[1]) && (!passCriteria[2]) && (!passCriteria[3])) {
    alert("Can not generate password.\nPlease confirm to include at least one set of characters");
    passCriteria = []
    getPassCriteria();
  }
}
// function to create criteriaChars string based on confirmed criteria selection
// create password from criteriaChars using Math.random() and Math.floor() functions
function generateCriteria() {
  if (passCriteria[0]) {
    criteriaChars = lowercaseChars;
    console.log(criteriaChars);
  }
  if (passCriteria[1]) {
    criteriaChars = (criteriaChars + uppercaseChars);
    console.log(criteriaChars);
  }
  if (passCriteria[2]) {
    criteriaChars = (criteriaChars + numericChars);
    console.log(criteriaChars);
  }
  if (passCriteria[3]) {
    criteriaChars = (criteriaChars + specialChars);
    console.log(criteriaChars);
  }
  for (var i = 0; i < passLength; i++) {
    password = password + criteriaChars.charAt(Math.floor(Math.random() * criteriaChars.length));
  }
  console.log(password);
  // Use setTimeout function to allow viewport text area and alert show password close to same time 
  document.getElementById("password").value = password;
  setTimeout(function () {
    alert("Your password is: " + password);
  }, 0);
}
// Adding comment, GitHub repo could not run app because .js and .css files not recognized, folder change from Assets to assets