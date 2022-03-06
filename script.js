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

var lowercase = ["a",	"b",	"c",	"d",	"e",	"f",	"g",	"h",	"i",	"j",	"k",	"l",	"m",	"n",	"o",	"p",	"q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  var numOfChar;
  var passwordBucket = [];
  var initialPassword = [];
  var finalPassword = [];

  if (window.confirm("Would you like lowercase letters?")) {
    passwordBucket.push(...lowercase);
    initialPassword.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  }

  if (window.confirm("Would you like uppercase letters?")) {
    passwordBucket.push(...uppercase);
    initialPassword.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  }

  if (window.confirm("Would you like numbers?")) {
    passwordBucket.push(...numeric);
    initialPassword.push(numeric[Math.floor(Math.random() * numeric.length)]);
  }

  if (window.confirm("Would you like special characters?")) {
    passwordBucket.push(...specialChar);
    initialPassword.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
  }

  var numOfChar = prompt("How many characters would you like your password to be?", "Enter a number");

  // Fills in remaining characters with randomly selected characters from approved buckets
  for (let i = initialPassword.length; i < numOfChar; i++) {
    initialPassword.push(passwordBucket[Math.floor(Math.random() * passwordBucket.length)]);
  }

  shufflePassword(initialPassword);

  var finalPassword = initialPassword.join("");

  return finalPassword;
}

// Shuffles array using the Fisher-Yates algorithm
function shufflePassword(array) {
  var m = array.length, temp, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }

  return array;
}